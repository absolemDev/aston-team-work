// import  {apiService}  from "../../../services/api.service";
// import {useAppDispatch, useAppSelector} from "#hooks";
// import {getUserName} from "#store";

// const Test = () =>{
//     const dispatch = useAppDispatch();
//     const userName = useAppSelector(getUserName);
//     const res = apiService.getInfo()
//     console.log(dispatch,userName,res)

//     return(<>123</>)
// }

// export {Test}

import React, {useId} from "react";
import {Outlet} from "react-router-dom";
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "#hooks";
import {getUserName, logOut} from "#store";

type ClassType = {
  id: string;
  clName: string;
  img: string;
}
const Test = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);

  const id = useId();
  const classes: Array<ClassType> = [
    {id, clName: "Death Knight", img: ""},
    {id, clName: "Demon Hunter", img: ""},
    {id, clName: "Druid", img: ""},
    {id, clName: "Hunter", img: ""},
    {id, clName: "Mage", img: ""},
    {id, clName: "Paladin", img: ""},
    {id, clName: "Rogue", img: ""},
    {id, clName: "Shaman", img: ""},
    {id, clName: "Warlock", img: ""},
    {id, clName: "Warrior", img: ""},
  ]

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary flex-column text-uppercase p-0">
        <Container className="p-0" style={{height: "90px", fontWeight: "bold"}}>
          <Navbar.Brand href="/">
            <div className="fs-2 fw-bold">heartstone</div>
            <div>top desk</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="m-0 justify-content-end" id="basic-navbar-nav">
            <Nav>
              {
                userName
                  ? <>
                    <NavDropdown title="Desk" id="basic-nav-dropdown"  className="px-3">
                      {
                        classes.map((cl,index)=>
                          <NavDropdown.Item href={`desk/${index}`} key={cl.id} style={{backgroundImage: `url(${cl.img})`}}>
                            {`${cl.clName} Decks`}
                          </NavDropdown.Item>)
                      }
                      <NavDropdown.Divider/>
                      <NavDropdown.Item href="desk/all">
                        All
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/favorites" className="px-3">Favorites page</Nav.Link>
                    <Nav.Link href="/history" className="px-3">History page</Nav.Link>
                    <Nav.Link href="#" className="px-1" style={{fontWeight: "normal"}}>
                      {`(${userName})`}
                    </Nav.Link>
                    <Nav.Link href="#"className="px-0"  onClick={handleClick}>logout</Nav.Link>
                  </>
                  : <>
                    <Nav.Link href="/signin">Signin</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Image className="w-100" alt="HEARTSTONE"
               src="https://cdn.hearthstonetopdecks.com/wp-content/uploads/2023/10/showdown-in-the-badlands-banner-01.jpg"/>
      </Navbar>
      <Outlet/>
    </>
  );
};

export {Test};