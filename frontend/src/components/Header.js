import React from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

import SearchBox from "./SearchBox";
import {logout} from "../actions/userActions";
import "../screens/homescreen.css";
import Avatar from "./Avatar";
import Logo from './blackcatlogo2.jpg'

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
      <Navbar  variant='dark' expand='lg' className='navbar1'>
        <Container className='navbar_container'>
           <LinkContainer to="/">
				<Navbar.Brand className="jumboH2 text-info"><img className="logo1" src={Logo} alt="blackcatlogo"></img></Navbar.Brand>
			</LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className="me-auto" id="first_nav">
            <LinkContainer to="/">
				<Navbar.Brand className="jumboH2 text-info ">Home</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/story">
				<Navbar.Brand className="jumboH2 text-info">My Story</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/contact">
				<Navbar.Brand className="jumboH2 text-info">Contact Me</Navbar.Brand>
			</LinkContainer>
                  <NavDropdown title="Products" className="jumboH2 text-info" id="navbardropdown1">
                  <LinkContainer to='/necklaces'>
                    <NavDropdown.Item className="jumboH5 text-info">Necklaces</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/bracelets'>
                    <NavDropdown.Item className="jumboH5 text-info">Bracelets</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/pendants'>
                    <NavDropdown.Item className="jumboH5 text-info">Pendants</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/statementpieces'>
                    <NavDropdown.Item className="jumboH5 text-info">Statement Pieces</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/jewelry'>
                    <NavDropdown.Item className="jumboH5 text-info">Jewelry Sets</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/trees'>
                    <NavDropdown.Item className="jumboH5 text-info">Trees</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/miscellaneous'>
                    <NavDropdown.Item className="jumboH5 text-info">Miscellaneous</NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart text-info"></i> Cart
								</Nav.Link>
							</LinkContainer>
				
							{userInfo ? (
								<div className="d-lg-flex justify-content-start ms-lg-5">
									<Avatar size="40px" url={userInfo.avatar} className="" />
									<NavDropdown title={userInfo.name} id="username">
										<LinkContainer to="/profile">
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
									</NavDropdown>
								</div>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu">
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/orderlist">
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
		</header>
	);
};

export default Header;
