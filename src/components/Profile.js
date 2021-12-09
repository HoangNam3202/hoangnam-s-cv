import React from "react";
import '../App.css'
import hinh from '../images/nam.jpg'
import fbicon from '../images/fb.png'
import calendar from '../images/calendar.png'
import home from '../images/home.png'
import phone from '../images/phone.png'
import mail from '../images/mail.png'

const Profile = () => {
    return (
        <div className="profile_par">
            {/* trai' */}
            <div className="profile_text">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* profile_text left */}
                    <div>
                        {/* contact */}
                        <div className='profile_contact'>
                            <div className='contact_title'>Thông tin liên hệ</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className='contact_left'>
                                    <div className='profile_fb'>
                                        <img className='fb_icon' src={calendar}></img>
                                        <a className='fb_link'>01/01/2001</a>
                                    </div>
                                    <div className='profile_fb'>
                                        <img className='fb_icon' src={mail}></img>
                                        <a className='fb_link'>hoangnam.work@gmail.com</a>
                                    </div>
                                    <div className='profile_fb'>
                                        <img className='fb_icon' src={phone}></img>
                                        <a className='fb_link' >0363 202 401</a>
                                    </div>
                                </div>
                                <div className='contact_right'>
                                    <div className='profile_fb'>
                                        <img className='fb_icon' src={fbicon}></img>
                                        <a className='fb_link' target='_blank' href='https://www.facebook.com/hoangnam.ho.401/'>Hoàng Nam Hồ</a>
                                    </div>
                                    <div className='profile_fb'>
                                        <img className='fb_icon' src={home}></img>
                                        <a className='fb_link' >82 Hùng Vương, Tự An, Buôn Ma Thuột, Đắk Lắk.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* school */}
                         <div className='profile_contact'>
                            <div className='experience_title'>Học vấn</div>
                            <div>
                                <div className='experience_decreption font_bold'>• Lập trình máy tính l  08/2019 - 12/2021</div>
                                <div className='experience_decreption font_bold'>Cao đẳng FPT Polytechnic</div>
                                <div className='experience_decreption'>- Xếp loại tốt nghiệp : Giỏi .</div>
                            </div>
                        </div>
                        {/* chill chill :) */}
                        <div className='profile_contact'>
                            <div className='experience_title'>Sở thích</div>
                            <div>
                                <div className='experience_decreption'>- Đá bóng .</div>
                                <div className='experience_decreption'>- Bơi lội .</div>
                                <div className='experience_decreption'>- Gym .</div>
                            </div>
                        </div>
                    </div>
                    {/* profile_text right */}
                    <div style={{ marginLeft: 10 }}>
                        {/* skill */}
                        <div className='profile_experience'>
                            <div className='experience_title'>Kỹ năng</div>
                            <div>
                                <div className='experience_decreption font_bold'>• Lập trình</div>
                                <div className='experience_decreption'>Sử dụng thành thạo các ngôn ngữ lập trình:
                                    <br />- Front-end : ReactJS, React-Native, HTML, CSS .
                                    <br />- Back-end : NodeJS , SQL và Database, Restful Api</div>
                            </div>
                            <div>
                                <div className='experience_decreption font_bold'>• Tiếng Anh</div>
                                <div className='experience_decreption'>- Khả năng đọc hiểu Tiếng Anh .</div>
                            </div>
                            <div>
                                <div className='experience_decreption font_bold'>• Giải thuật</div>
                                <div className='experience_decreption'>- Nắm vững kiến thức về giải thuật, có thể áp dụng vào các dự án thực tế .</div>
                            </div>
                            <div>
                                <div className='experience_decreption font_bold'>• Công Cụ</div>
                                <div className='experience_decreption'>- Sử dụng : GitHub, Photoshop .</div>
                            </div>
                        </div>
                        
                        {/* experience */}
                        <div className='profile_experience'>
                            <div className='experience_title'>Kinh nghiệm làm việc</div>
                            <div>
                                <div className='experience_decreption font_bold'>• Lập trình viên website/app . l  07/2021 - 12/2021</div>
                                <div className='experience_decreption font_bold'>Công ty TNHH Dược VTYT Thuốc sỉ ETC Pharma (https://thuocsionline.vn/)</div>
                                <div className='experience_decreption'>- Tham gia vào việc tạo một trang web từ đầu.
                                    <br />- Xây dựng chức năng và giao diện front-end của trang web/app.
                                    <br />- Xây dựng 1 số chức năng back-end .
                                    <br />- Quản lý một số cơ sở dữ liệu và các công cụ báo cáo.
                                    <br />- Tham gia nghiên cứu và trình bày các công nghệ mới.
                                    <br />- Giải quyết vấn đề tương thích trên nhiều trình duyệt.
                                    <br />- Dùng thử và kiểm tra lỗi .</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ben phai */}
            <div className="profile_image">
                <div className="test">
                    <img className="img" src={hinh}></img>
                    <div className="div_image"></div>
                    <div className="div_image1"></div>
                    <div className="div_image2"></div>
                    <div className="div_name">HOANG NAM HO</div>
                </div>
            </div>
        </div>
    );
};
export default Profile;