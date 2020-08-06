import  React , {Component} from "react";


class ability extends Component {
    render() {
        return (
            // <!-- ABILITY -->
                <div className="ability">
                    <div className="row ability-container">
                        <div className="ability-container--content col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <span className="ability-container--content_icon"><i className="fas fa-shipping-fast"></i></span>
                            <div className="ability-container--content_name ability-container--content_name-freeship">
                                <h4 className="ability-container--content_name__tittle"> <strong> Miễn phí giao hàng</strong></h4>
                                <span className="ability-container--content_name__sub"> Trên tất cả sản phẩm</span>
                            </div>
                        </div>
                        <div className="ability-container--content col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <span className="ability-container--content_icon"><i className="fas fa-shield-alt"></i></span>
                            <div className="ability-container--content_name">
                                <h4 className="ability-container--content_name__tittle"> <strong>Bảo hành</strong></h4>
                                <span className="ability-container--content_name__sub">Hoàn tiền trong 30 ngày</span>
                            </div>
                        </div>
                        <div className="ability-container--content col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <span className="ability-container--content_icon"><i className="fas fa-headset"></i></span>
                            <div className="ability-container--content_name">
                                <h4 className="ability-container--content_name__tittle"> <strong>Hỗ trợ</strong></h4>
                                <span className="ability-container--content_name__sub">Hỗ trợ online 24/7</span>
                            </div>
                        </div>
                        <div className="ability-container--content col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <span className="ability-container--content_icon"><i className="fas fa-crown"></i></span>
                            <div className="ability-container--content_name">
                                <h4 className="ability-container--content_name__tittle"> <strong>Hội viên</strong></h4>
                                <span className="ability-container--content_name__sub">Giảm giá lên đến 40%</span>
                            </div>
                        </div>
                   
                    </div>
                </div>
        );
    }
}
export default ability;