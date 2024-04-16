package org.vaadin.example;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;

@Tag("div")
public class Container  extends Composite<Div> {
    public Container(CounterService service) {
        var containerH2 = new H2("Container");
        
        var countH1 = new H1("Counter: ");
        Span countSpan = new Span("" + service.getCount());
        countH1.add(countSpan);

        Button button = new Button("Increase", e -> {
            service.increase();
            countSpan.setText("" + service.getCount());
        });
        button.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        button.addClickShortcut(Key.ENTER);
        
        getContent().add(containerH2, countH1, button);
    }
}
