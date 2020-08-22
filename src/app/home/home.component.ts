import { Component, OnInit } from '@angular/core';
import {PHONE_NUMBER} from "../_data/phone.data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "https://images.squarespace-cdn.com/content/v1/573266db20c647896b5aaa45/1524171007121-71L1XR6RRYKGD5G8OTPI/ke17ZwdGBToddI8pDm48kHQzeS6BiZnyWeFhN8Ruzx57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCYWGxfdB_uf1_ERfebHZ6fv29j9GP1-WZyYaD2OlLlMcpLxGpcYn9NtoYQc_8neA/Apple+Walnut+Salad+%28top%29.jpg?format=1000w"},
    {img: "https://images.squarespace-cdn.com/content/v1/573266db20c647896b5aaa45/1524172300574-AQCOFONKS8BQLKQ6EMU4/ke17ZwdGBToddI8pDm48kHQzeS6BiZnyWeFhN8Ruzx57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCYWGxfdB_uf1_ERfebHZ6fv29j9GP1-WZyYaD2OlLlMcpLxGpcYn9NtoYQc_8neA/Arugula+Salad+%28top%29.jpg?format=1000w"},
    {img: "https://images.squarespace-cdn.com/content/v1/573266db20c647896b5aaa45/1524171163431-NW7K08GX5BCLXSVLSAC9/ke17ZwdGBToddI8pDm48kHQzeS6BiZnyWeFhN8Ruzx57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCYWGxfdB_uf1_ERfebHZ6fv29j9GP1-WZyYaD2OlLlMcpLxGpcYn9NtoYQc_8neA/Asiago+Steak+Sandwich+%28side%29.jpg?format=1000w"},
    {img: "https://images.squarespace-cdn.com/content/v1/573266db20c647896b5aaa45/1524172260767-S7YDZ7RXEQK6X6N97FOA/ke17ZwdGBToddI8pDm48kHQzeS6BiZnyWeFhN8Ruzx57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCYWGxfdB_uf1_ERfebHZ6fv29j9GP1-WZyYaD2OlLlMcpLxGpcYn9NtoYQc_8neA/NY+Strip+Steak+%28side%29.jpg?format=1000w"},
  ];

  topSlideConfig = {"slidesToShow": 1, "slidesToScroll": 1, asNavFor: '.carousel-btm', arrows: false, fade: true};
  btmSlideConfig = {"slidesToShow": 3, "slidesToScroll": 1, asNavFor: '.carousel-top', focusOnSelect: true, centerMode: true, arrows: true};

  PHONE_NUMBER = PHONE_NUMBER;

  constructor() { }

  ngOnInit(): void {
  }
}
