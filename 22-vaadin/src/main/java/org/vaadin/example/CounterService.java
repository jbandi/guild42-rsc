package org.vaadin.example;

import java.io.Serializable;

import org.springframework.stereotype.Service;

@Service
public class CounterService implements Serializable {

    private int count = 0;

    public String greet(String name) {
        if (name == null || name.isEmpty()) {
            return "Hello anonymous user";
        } else {
            return "Hello " + name;
        }
    }

    public int getCount() {
        return count;
    }

    public void increase() {
        count++;
    }
}
