package org.vaadin.example;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Nav;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.router.RouterLink;

public class MainLayout extends Div implements RouterLayout {
    public MainLayout() {
        setId("root");
        Nav nav = new Nav();
        RouterLink homeLink = new RouterLink("Home", MainView.class);
        RouterLink otherLink = new RouterLink("Other", OtherView.class);
        nav.add(homeLink, otherLink);
        add(nav);
    }
}
