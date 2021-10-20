import logo from '../../images/core-img/logo.png'
import cart from '../../images/core-img/cart.png'
import favorites from '../../images/core-img/favorites.png'
import search from '../../images/core-img/search.png'

import product1 from '../../images/product-img/product1.jpg'
import product2 from '../../images/product-img/product2.jpg'
import product3 from '../../images/product-img/product3.jpg'
import product4 from '../../images/product-img/product4.jpg'
import product5 from '../../images/product-img/product5.jpg'
import product6 from '../../images/product-img/product6.jpg'
import Menu  from './menu';

export default function MainContent() {
        /*const Product = (props) => {
            return (< class="row">
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                            
                            <div class="product-img">
                                <img src={props.product1} alt=""/>
                                
                                <img class="hover-img" src={props.product2} alt=""/>
                            </div>

                            
                            <div class="product-description d-flex align-items-center justify-content-between">
                                
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>);*/
        
return <div class="main-content-wrapper d-flex clearfix">
        <div class="mobile-nav">
            
            <div class="amado-navbar-brand">
                <a href="index.html"><img src={logo} alt=""/></a>
            </div>
            
            <div class="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>

        
        <header class="header-area clearfix">
            
            <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            
            <div class="logo">
                <a href="index.html"><img src={logo} alt=""/></a>
            </div>
            
            <nav class="amado-nav"> 
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><a href="shop.html">Shop</a></li>
                    <li><a href="product-details.html">Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
            </nav>
            
            <div class="amado-btn-group mt-30 mb-100">
                <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                <a href="#" class="btn amado-btn active">New this week</a>
            </div>
            
            <div class="cart-fav-search mb-100">
                <a href="cart.html" class="cart-nav"><img src={cart} alt=""/> Cart <span>(0)</span></a>
                <a href="#" class="fav-nav"><img src={favorites} alt=""/> Favourite</a>
                <a href="#" class="search-nav"><img src={search} alt=""/> Search</a>
            </div>
            
            <div class="social-info d-flex justify-content-between">
                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>

        <Menu/>

        <div class="amado_product_area section-padding-100">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12">
                        <div class="product-topbar d-xl-flex align-items-end justify-content-between">
                            
                            <div class="total-products">
                                <p>Showing 1-8 0f 25</p>
                                <div class="view d-flex">
                                    <a href="#"><i class="fa fa-th-large" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            
                            <div class="product-sorting d-flex">
                                <div class="sort-by-date d-flex align-items-center mr-15">
                                    <p>Sort by</p>
                                    <form action="#" method="get">
                                        <select name="select" id="sortBydate">
                                            <option value="value">Date</option>
                                            <option value="value">Newest</option>
                                            <option value="value">Popular</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="view-product d-flex align-items-center">
                                    <p>View</p>
                                    <form action="#" method="get">
                                        <select name="select" id="viewProduct">
                                            <option value="value">12</option>
                                            <option value="value">24</option>
                                            <option value="value">48</option>
                                            <option value="value">96</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                    
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                            
                            <div class="product-img">
                                <img src={product2} alt=""/>
                                
                                <img class="hover-img" src={product3} alt=""/>
                            </div>

                            
                            <div class="product-description d-flex align-items-center justify-content-between">
                                
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                            
                            <div class="product-img">
                                <img  src={product3} alt=""/>
                                
                                <img class="hover-img"  src={product4} alt=""/>
                            </div>

                            
                            <div class="product-description d-flex align-items-center justify-content-between">
                                
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                         
                            <div class="product-img">
                                <img src={product4} alt=""/>
                              
                                <img class="hover-img" src={product5} alt=""/>
                            </div>

                          
                            <div class="product-description d-flex align-items-center justify-content-between">
                               
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                           
                            <div class="product-img">
                                <img  src={product5} alt=""/>
                               
                                <img class="hover-img" src={product6} alt=""/>
                            </div>

                           
                            <div class="product-description d-flex align-items-center justify-content-between">
                               
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                            
                            <div class="product-img">
                                <img  src={product6} alt=""/>
                                <img class="hover-img"  src={product1}  alt=""/>
                            </div>

                            
                            <div class="product-description d-flex align-items-center justify-content-between">
                                
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>Modern Chair</h6>
                                    </a>
                                </div>
                                
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="images/core-images/cart.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <nav aria-label="navigation">
                            <ul class="pagination justify-content-end mt-50">
                                <li class="page-item active"><a class="page-link" href="#">01.</a></li>
                                <li class="page-item"><a class="page-link" href="#">02.</a></li>
                                <li class="page-item"><a class="page-link" href="#">03.</a></li>
                                <li class="page-item"><a class="page-link" href="#">04.</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>}
    