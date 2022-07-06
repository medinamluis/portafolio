package com.example;

import java.nio.file.*;   // Java's non-blocking input/output API
import java.rmi.server.ExportException;

// We want to test using the Apache Tika™ toolkit, which detects and extracts metadata and text
// from over a thousand different file type:
import org.apache.tika.Tika;   // Click on Refresh in the Maven panel to load to External Libraries

import static java.nio.file.StandardWatchEventKinds.ENTRY_CREATE;

/**
 * Hello world!
 *
 */
public class App {
    private static final String DIR_TO_WATCH = "/Users/medinamluis/Desktop";   // directory to watch changes in
    private static final String FILE_TYPE = "text/csv";   // we'll look for CSV files in the directory

    public static void main(String[] args) throws Exception  {   // "throws Exception" to silence error: BUT not implemented correctly!
        Path dir = Paths.get(DIR_TO_WATCH);
        Tika tika = new Tika();
        WatchService watchService = FileSystems.getDefault().newWatchService();   // allows us to watch on the directory
        dir.register(watchService, ENTRY_CREATE);    // register watchService for events creating new files

        WatchKey key;
        do {
            key = watchService.take();   // represent the registration of the path object with the watch service when an event occurs
            key.pollEvents().stream().filter(e -> {
                Path filename = (Path)e.context();
                String type = tika.detect(filename.toString());
                return FILE_TYPE.equals(type);
            }).forEach(e ->
                    System.out.printf("File found: %s%n", e.context())
            );
        } while(key.reset());  // as long as the key is valid
    }
}
