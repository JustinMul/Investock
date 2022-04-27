import React from "react";
import SideBarList from "../Dashboard/SideBarList";
import { Grid } from "@mui/material";
import { Typography, Tooltip } from "@mui/material";
import "../Dashboard/TrendingCrypto.scss";
import { useState, useEffect } from "react";
import Developers from "./Developers";
import "./Developer.scss";
import { Link } from "react-router-dom";

const DeveloperList = (props) => {
  // const username = JSON.parse(localStorage.getItem('username'));
  const [adminColor, setAdminColor] = useState("admin");
  const [adminColor2, setAdminColor2] = useState("admin2");
  const [adminColor3, setAdminColor3] = useState("admin3");
  useEffect(() => {
    if (props.mode === "dark") {
      setAdminColor("adminDark");
      setAdminColor2("adminDark2");
      setAdminColor3("adminDark3");
    } else {
      setAdminColor("admin");
      setAdminColor2("admin2");
      setAdminColor3("admin3");
    }
  }, [props.mode]);

  const admins = [
    {
      name: "Justin",
      github: "https://github.com/JustinMul",
      linkedin: "https://www.linkedin.com/in/justin-m-67321bb8/",
      img: "justin.jpeg",
      description:
        "Full stack developer with interests in building innovative websites!",
    },
    {
      name: "Jack",
      github: "https://github.com/Jackthz97?tab=repositories",
      linkedin: "https://www.linkedin.com/in/tianhao-zhang-b49a5b226/",
      img: "jack.jpeg",
      description:
        "Full Stack Developer that loves to create & develop websites!",
    },
    {
      name: "Saurabh",
      github: "https://github.com/saurabhdabas",
      linkedin: "https://www.linkedin.com/in/saurabh-dabas-a3617b15a/",
      img: "saurabh.jpg",
      description:
        "Full Stack Developer with Passion to create dynamic websites",
    },
  ];
  const developers = admins.map((dev) => {
    return (
      <Developers
        key={dev.name}
        name={dev.name}
        img={dev.img}
        github={dev.github}
        description={dev.description}
        linkedin={dev.linkedin}
        adminColor={adminColor}
        adminColor2={adminColor2}
        adminColor3={adminColor3}
        mode={props.mode}
      />
    );
  });
  return (
    <div>
      <SideBarList mode={props.mode} setMode={props.setMode} />
      <Typography align="center" variant="h3" fontFamily={"Pacifico"} mr={3.5}>
        Krypto Developers
      </Typography>
      <Grid container direction={"row"} justifyContent={"center"} mt={4}>
        {developers}
      </Grid>
      <Typography
        fontFamily={"Pacifico"}
        align="center"
        variant="h4"
        noWrap
        component="div"
        mr={3}
        mt={1}
      >
        Built with
      </Typography>
      <Grid container direction={"row"} justifyContent={"center"} mt={3}>
        <Tooltip title="React Js" arrow>
          <Typography className="anime" mr={4}>
            <a
              href="https://reactjs.org/"
              rel="reactjs noreferrer"
              target="_blank"
            >
              <img src={"reactIcon.jpg"} alt={"React"} width={62} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="PostgreSQL" arrow>
          <Typography className="anime" mr={3.5}>
            <a
              href="https://www.postgresql.org/"
              rel="psql noreferrer"
              target="_blank"
            >
              <img src={"psqlIcon.png"} alt={"psql"} width={70} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="Socket.io" arrow>
          <Typography className="anime" mr={3.5}>
            <a
              href="https://socket.io/"
              rel="socketio noreferrer"
              target="_blank"
            >
              <img src={"socketio.png"} alt={"socket.io"} width={70} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="Chart Js" arrow>
          <Typography className="anime" mr={3}>
            <a
              href="https://www.chartjs.org/"
              rel="chartjs noreferrer"
              target="_blank"
            >
              <img src={"chartjs.png"} alt={"Chart Js"} width={70} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="Node Js" arrow>
          <Typography className="anime" mr={4.5}>
            <a
              href="https://nodejs.org/en/about/"
              rel="nodejs noreferrer"
              target="_blank"
            >
              <img src={"node.png"} alt={"Node Js"} width={70} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="JavaScript" arrow>
          <Typography className="anime" mr={4.5}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              rel="javascript noreferrer"
              target="_blank"
            >
              <img src={"js.webp"} alt={"Js"} width={65} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="HTML" arrow>
          <Typography className="anime" mr={3.5}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              rel="html noreferrer"
              target="_blank"
            >
              <img src={"html.png"} alt={"html"} width={65} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="CSS" arrow>
          <Typography className="anime" mr={2}>
            <a
              href="https://www.w3schools.com/css/css_intro.asp"
              rel="css noreferrer"
              target="_blank"
            >
              <img src={"css.png"} alt={"css"} width={65} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="SASS" arrow>
          <Typography className="anime" mt={1} mr={1}>
            <a
              href="https://sass-lang.com/documentation"
              rel="sass noreferrer"
              target="_blank"
            >
              <img src={"sass.png"} alt={"sass"} width={103} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="Material UI" arrow>
          <Typography className="anime" mr={3}>
            <a
              href="https://mui.com/material-ui/getting-started/installation/"
              rel="mui noreferrer"
              target="_blank"
            >
              <img src={"mui.png"} alt={"mui"} width={80} />
            </a>
          </Typography>
        </Tooltip>
        <Tooltip title="Express Js" arrow>
          <Typography mt={2}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
              rel="expressjs noreferrer"
              target="_blank"
            >
              <img
                className="rounded"
                src={"expressjs.png"}
                alt={"Express Js"}
              />
            </a>
          </Typography>
        </Tooltip>
      </Grid>
    </div>
  );
};
export default DeveloperList;
