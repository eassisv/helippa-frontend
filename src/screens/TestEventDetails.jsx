/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment, react/prop-types */
import React, { Component } from "react";
import { View } from "react-native";
import EventItem from "../components/EventItem";

export default class TestScreen extends Component {
  render() {
    const event = {
      title: "ENEM 2020",
      subtitle: "Período de inscrições iniciado!",
      image:
        "https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/20713/01f55c6fb704f0593eb74cb81b6ed36263062dd9.png?1562162289",
      startDate: "07/05/2020",
      endDate: "18/05/2020",
      url: "https://enem.inep.gov.br/",
      text: `\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum sapien id orci scelerisque pretium. In id lacinia dui, non fermentum nisl. Mauris blandit semper tempor. Duis sit amet risus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet elementum felis. Phasellus dignissim mattis placerat. Nam eleifend gravida rutrum. Nullam finibus dui et enim consequat, nec elementum justo gravida. In sed mi in tellus semper tristique. Aliquam fringilla nec neque eu vestibulum. Ut eu sem interdum purus consectetur pretium. Donec maximus mauris dolor. \nIn eget eleifend neque. Aenean pulvinar urna ac eleifend tempus. Donec lobortis nunc eget libero euismod consequat. Maecenas id aliquam ipsum. Sed non malesuada lacus. Integer eget ipsum lacus. Vivamus ut vehicula leo. Sed lacinia a enim ut mattis. \n\tMorbi in diam in nibh dictum fringilla ac nec ligula. Maecenas metus dolor, gravida sed ligula feugiat, tempus facilisis nunc. Mauris eros lectus, ultricies eu imperdiet non, consequat vel elit. In at lacus ac massa volutpat tincidunt. Maecenas vehicula posuere tincidunt. Duis massa justo, sagittis fermentum condimentum ac, tincidunt ultricies velit. Aliquam dignissim convallis diam, ac ullamcorper risus auctor sed. Aliquam suscipit luctus elementum. Ut porttitor placerat tristique.`
    };
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          transparent
          onTouchEnd={() => {
            this.props.navigation.navigate("EventDetails", { event });
          }}
        >
          <EventItem
            image={event.image}
            width={300}
            height={200}
            fontSize={16}
            label="Labelzinha"
          />
        </View>
      </View>
    );
  }
}
