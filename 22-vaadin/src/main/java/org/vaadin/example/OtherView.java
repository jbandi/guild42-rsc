package org.vaadin.example;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import com.vaadin.flow.component.html.H1;

@Route(value = "other", layout = MainLayout.class)
public class OtherView extends VerticalLayout {

    public OtherView(@Autowired CounterService service) {

        Container container = new Container(service);

        addClassName("centered-content");

        add(container);
    }

}
