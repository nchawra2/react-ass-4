import React from "react";

import Button from "@mui/material/Button";

function Contact() {
  return (
    <div className="container mt-3">
      <h1 className="display-4 text-secondary">Contact Component</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        officiis possimus repellat laboriosam iure molestias repudiandae non
        delectus, dicta corporis architecto porro facere magni voluptatibus ab
        necessitatibus reprehenderit quasi! Dolorem.
      </p>
      <div className="row mt-5">
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/22.080065,82.155998/12?ms=648,345&heid=7467560226443493377,707070&fpp=22.08006477355957,82.15599822998047;178&ml=Basemap,Landmarks,OsmBuildings&key=AnTcaqBi2ypp0xI-OZNi4W_ik2KhjgpqioTAtXLC8GzkMBQRMlyxvxyTnd5b73im&c=en-US&ur=in&fmt=jpeg&od=1&logo=n&da=ro&setfeatures=ttskdata"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <p className="text-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, rerum
            earum nobis quae at non ea aliquam? Facere nemo, tempore cupiditate
            magni impedit saepe tempora doloribus fugit tenetur ducimus deserunt
            quae aliquid harum, corporis illo quam officiis quidem quisquam
            voluptatibus nihil blanditiis est temporibus maiores illum. Fugiat
            a, quia labore in vel
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
            distinctio sunt accusantium sequi ipsum quasi? Ea accusantium,
            quibusdam tempore ab nulla aliquid, autem ullam fugiat quaerat
            doloribus, corporis culpa qui! At numquam repudiandae eaque. Ratione
            dolore modi accusantium repellendus?
          </p>

          <Button variant="contained" color="error">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
