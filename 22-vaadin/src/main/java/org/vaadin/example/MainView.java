package org.vaadin.example;

import com.vaadin.flow.component.html.H1;
import org.springframework.beans.factory.annotation.Autowired;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;


@Route(layout = MainLayout.class)
public class MainView extends VerticalLayout {

    public MainView(@Autowired CounterService service) {
        this.setAlignItems(Alignment.CENTER);
        H1 welcomeH1 = new H1("Welcome to Vaadin!");
        add(welcomeH1);
    }

}
