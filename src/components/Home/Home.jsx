import React from "react";

import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="display-4 text-primary">Home Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse
        numquam, accusantium, maxime voluptatem harum, magni placeat ea
        reiciendis nesciunt omnis eius saepe ipsa dicta tenetur rem consectetur
        iusto est!
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://th.bing.com/th/id/R.c766a45e8ea54878da521543180008b0?rik=uql2iEmmVaR6jg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f4%2f16%2fPDVRec.jpg&ehk=B4tYizQTZ6d6xWLTC1TuZjHoNSvO%2fjWhTraCvOjwfyQ%3d&risl=&pid=ImgRaw&r=0"
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
            a, quia labore in vel possimus tenetur, laboriosam architecto, ipsa
            libero laborum sapiente!
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
            distinctio sunt accusantium sequi ipsum quasi? Ea accusantium,
            quibusdam tempore ab nulla aliquid, autem ullam fugiat quaerat
            doloribus, corporis culpa qui! At numquam repudiandae eaque. Ratione
            dolore modi accusantium repellendus? Vel est suscipit pariatur
            delectus vero non amet laboriosam facilis.
          </p>

          <Button variant="contained" color="primary">
            Welcome To Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
