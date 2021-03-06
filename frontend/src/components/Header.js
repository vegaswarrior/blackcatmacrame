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
			<Navbar
				className="navbar1 d-flex justify-content-center"
				variant="dark"
				expand="lg"
				collapseOnSelect
			>
				<Container>
					{/* <LinkContainer to='/'>
            <Navbar.Brand>Black Cat Macrame</Navbar.Brand>
          </LinkContainer> */}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					    <LinkContainer to="/">
							<Navbar.Brand className="jumboH2 text-info"><img className="logo1" src={Logo}></img></Navbar.Brand>
						</LinkContainer>
						{/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
						<LinkContainer to="/">
							<Navbar.Brand className="jumboH2 text-info">Home</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to="/story">
							<Navbar.Brand className="jumboH2 text-info">My Story</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to="/collections">
							<Navbar.Brand className="jumboH2 text-info">Collections</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Navbar.Brand className="jumboH2 text-info">Contact Me</Navbar.Brand>
						</LinkContainer>
						{/* <ul className='list-unstyled d-inline'>
									<li className="d-inline">
										<a href="https://www.facebook.com/MacrameBlackCat"><i className="fa-brands fa-facebook footer-icons"></i></a>
									</li>
									<li>
										<a href="https://www.instagram.com/macrameblackcat/?fbclid=IwAR0vuZkalF3G0wG7Mr4G2GlLZSHpwUxf_ZMAIFZ8op5ApSLYCU76R8qWNfU"><i className="fa-brands fa-instagram footer-icons"></i></a>
									</li>
									<li>
										<a href="https://www.etsy.com/shop/MacrameBlackCat?fbclid=IwAR1A5vjBmlsHJOoa8k1dC6WVWdSjjd6Q9c-8mJxZRn4gMajTdp7ahSZBKjI"><i className="fa-brands fa-etsy footer-icons"></i></a>
									</li>
									<li>
										<a href="https://www.facebook.com"><i className="fa-brands fa-pinterest footer-icons"></i></a>
									</li>
						</ul> */}
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
