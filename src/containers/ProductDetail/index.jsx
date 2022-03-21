import React from 'react'

import './ProductDetail.css'

const ProductDetail = () => {
    return (
        <section class="productBox">
            <div class="productBox__container container">
                <div class="productBox__summary">
                    <div class="productBox__gallery">
                        <img src="https://res.cloudinary.com/dzoav55s4/image/upload/v1647618565/11_540x_ebsdhj.webp" alt="" class="productBox__gallery-main"/>
                    </div>

                    <div class="productBox__content">
                        <h2 class="productBox__name">Sacrificial Chair Design</h2>
                        <div class="productBox__rating">
                            <div class="productBox__rating-star">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bx-star'></i>
                            </div>
                            <div class="productBox__rating-review">
                                <span>4 reviews</span>
                            </div>
                        </div>
                        <div class="productBox__price">
                            <span class="productBox__price-sale">$260.00</span>
                            <span class="productBox__price-normal">$280.00</span>
                        </div>
                        <div class="productBox__btns">
                            <div class="productBox__btns-quantity">
                                <i class='bx bx-minus left'></i>
                                <input type="number" name="" id="" value="1"/>
                                <i class='bx bx-plus right'></i>
                            </div>
                            <div class="productBox__btns-buy">
                                <i class='bx bx-plus'></i>
                                <span>Add to Cart</span>
                            </div>
                        </div>

                        <div class="productBox__infor">
                            <p class="productBox__status">Availability: In stock</p>
                            <p class="productBox__vendor">Vendor: velatheme</p>
                            <p class="productBox__sku">SKU: N/A</p>
                            <p class="productBox__collections">Collections:
                                <a href="#" class="productBox__collections-link"> Best Seller</a>
                            </p>
                        </div>

                        <div class="productBox__social">
                            <span class="productBox__social-label">share</span>
                            <div class="productBox__social-icon">
                                <i class='bx bxl-twitter'></i>
                                <i class='bx bxl-facebook'></i>
                                <i class='bx bxl-pinterest-alt'></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="productBox-detail">
                    <ul class="productBox__tab-heading">
                        <li class="active">description</li>
                        <li>reviews</li>
                    </ul>

                    <div class="productBox__tab-content">
                        <div>
                            <p>Dont ever play yourself. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! The other day the grass was brown, now its green because I aint give up. Never surrender</p>
                            <ul>
                                <li>Claritas est etiam processus dynamicus.</li>
                                <li>Qui sequitur mutationem consuetudium lectorum.&nbsp;</li>
                                <li>Claritas est etiam processus dynamicus.</li>
                                <li>Qui sequitur mutationem consuetudium lectorum.&nbsp;</li>
                                <li>Claritas est etiam processus dynamicus.</li>
                                <li>Qui sequitur mutationem consuetudium lectorum.&nbsp;</li>
                            </ul>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail