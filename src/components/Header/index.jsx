import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation';
import './index.css';

const Header = (props) => {
  const { isShowNavigation, classHeader } = props;

  return (
    <header className={`header ${classHeader}`}>
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <div className="container">
          <ul className="navbar-nav nav-pills me-auto">
            <li className="nav-item">
              <Link to="/" type="button" className="nav-link">
                <svg width="180" height="46" viewBox="0 0 180 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M77.6577 15.243V23.9576H83.0336L81.3667 22.0774V13.3627H75.9952L77.6577 15.243Z" fill="white" />
                  <path d="M90.984 23.9576L89.6837 22.0774V19.7205H91.8829C92.0705 19.7205 92.2363 19.7643 92.4065 19.8517C92.568 19.9348 92.7163 20.0616 92.8385 20.2146C92.9607 20.372 93.0654 20.5513 93.1308 20.7656C93.205 20.9798 93.2399 21.216 93.2399 21.4696V22.3791L92.1491 23.9532H99.2093L97.1933 22.2217V21.7931C97.1933 21.4084 97.1366 21.0585 97.0231 20.7262C96.9097 20.3939 96.7569 20.1053 96.5606 19.8517C96.3642 19.5981 96.133 19.397 95.8668 19.2264C95.6006 19.0646 95.3213 18.9553 95.0159 18.916C95.4042 18.7979 95.7533 18.658 96.0675 18.4918C96.3817 18.33 96.6522 18.1376 96.8791 17.9234C97.106 17.7091 97.2718 17.4599 97.3897 17.1844C97.5075 16.9089 97.5686 16.5985 97.5686 16.253C97.5686 15.8027 97.4726 15.4135 97.2762 15.0899C97.0842 14.7663 96.8224 14.4909 96.4951 14.2766C96.1679 14.0623 95.7839 13.8831 95.3519 13.7519C94.9199 13.6207 94.4617 13.5245 93.9774 13.4589C93.4974 13.3933 93.0087 13.3496 92.5069 13.3277C92.0094 13.3059 91.5338 13.3015 91.0756 13.3015C90.8618 13.3015 90.5913 13.3015 90.264 13.3015C89.9367 13.3015 89.5789 13.3015 89.1775 13.3059C88.776 13.3059 88.3484 13.3103 87.899 13.319C87.4495 13.3234 86.9739 13.3321 86.5026 13.3321C86.0227 13.3321 85.547 13.3365 85.0627 13.3452C84.5783 13.3496 84.1114 13.3584 83.6663 13.3627L85.8918 15.243V22.0861L83.662 23.9663L90.984 23.9576ZM89.6837 14.9106H90.7309C90.9447 14.9106 91.1629 14.915 91.3942 14.9281C91.6254 14.9412 91.848 14.9675 92.0705 15.0025C92.2887 15.0374 92.4981 15.0987 92.6945 15.173C92.8909 15.2473 93.0654 15.3479 93.2138 15.4791C93.3665 15.6015 93.4799 15.7589 93.5672 15.947C93.6501 16.135 93.6981 16.358 93.6981 16.6203C93.6981 16.957 93.637 17.2412 93.5192 17.4555C93.4014 17.6698 93.2225 17.8403 92.9738 17.9627C92.7338 18.0852 92.4152 18.1726 92.0443 18.2163C91.6734 18.2601 91.2327 18.2819 90.7309 18.2819H89.6837V14.9106Z" fill="white" />
                  <path d="M63.8166 22.0774L61.8007 23.9576H70.5408L67.5911 22.0774V19.8604H72.1989V18.2382H67.5911V15.0549H72.1117L74.9785 17.027L75.1182 13.3627H61.8007L63.8166 15.243V22.0774Z" fill="white" />
                  <path d="M18.0606 15.4572L17.441 23.1705L17.4541 23.1618L16.2585 37.9281C16.2585 38.0068 16.2716 38.0812 16.3021 38.1555C16.4898 38.6278 17.2883 38.9382 18.0344 39.135L19.7668 15.6759L21.2722 15.5403V39.6116C21.5427 39.6335 21.8089 39.651 22.0751 39.6684C23.166 39.7384 24.2568 39.7778 25.3477 39.8171C26.4473 39.8565 27.5513 39.8914 28.6509 39.9527C29.3884 39.992 30.1258 40.0445 30.8632 40.1232L28.8822 15.4616L30.3091 13.1572L29.1484 12.7375L29.1702 10.4418L29.7854 9.92148C29.1484 8.96825 27.2371 8.2424 26.4212 7.42034C26.1942 7.18859 25.3739 6.42776 25.2605 6.24411C24.7717 5.41768 25.2299 5.39582 24.283 4.82738L23.6198 0.0262357L23.4714 0L23.3274 0.0262357L22.6598 4.823C21.7129 5.38707 22.1711 5.41331 21.6824 6.23973C21.5733 6.42776 20.7529 7.18859 20.5217 7.41597C19.7057 8.2424 17.7901 8.96825 17.1574 9.91711L17.7726 10.4375L17.7944 12.7331L16.6337 13.1529L18.0606 15.4572ZM25.8452 9.37491C26.6524 9.49297 27.3899 9.67224 28.0313 9.89962V12.4795L28.0095 12.4751C27.3593 12.3702 26.6393 12.2871 25.867 12.2302L25.8452 9.37491ZM25.3695 17.7878C25.7579 17.8622 26.0764 18.2732 26.0764 18.7017V20.8006C25.6314 20.735 25.1601 20.6825 24.6626 20.6519V18.4394C24.6626 18.0065 24.9812 17.7135 25.3695 17.7878ZM21.8525 9.29183C22.3849 9.23935 22.9391 9.20875 23.5107 9.20875C23.9994 9.20875 24.4794 9.23061 24.9419 9.26996V12.1778C24.4663 12.1559 23.9732 12.1471 23.467 12.1471C22.9129 12.1471 22.3718 12.1603 21.8525 12.1865V9.29183ZM18.9159 9.93023C19.505 9.71597 20.1769 9.54107 20.9144 9.41863L20.9275 12.2477C20.2031 12.3046 19.5268 12.3833 18.9159 12.4838V9.93023Z" fill="white" />
                  <path d="M155.878 23.9576L154.578 22.0774V19.7205H156.777C156.965 19.7205 157.131 19.7643 157.301 19.8517C157.462 19.9348 157.611 20.0616 157.733 20.2146C157.855 20.372 157.96 20.5513 158.025 20.7656C158.099 20.9798 158.134 21.216 158.134 21.4696V22.3791L157.043 23.9532H164.104L162.088 22.2217V21.7931C162.088 21.4084 162.031 21.0585 161.918 20.7262C161.804 20.3939 161.651 20.1053 161.455 19.8517C161.259 19.5981 161.027 19.397 160.761 19.2264C160.495 19.0646 160.216 18.9553 159.91 18.916C160.299 18.7979 160.648 18.658 160.962 18.4918C161.276 18.33 161.547 18.1376 161.774 17.9234C162 17.7091 162.166 17.4599 162.284 17.1844C162.402 16.9089 162.463 16.5985 162.463 16.253C162.463 15.8027 162.367 15.4135 162.171 15.0899C161.979 14.7663 161.717 14.4909 161.39 14.2766C161.062 14.0623 160.678 13.8831 160.246 13.7519C159.814 13.6207 159.356 13.5245 158.872 13.4589C158.392 13.3933 157.903 13.3496 157.401 13.3277C156.904 13.3059 156.428 13.3015 155.97 13.3015C155.756 13.3015 155.486 13.3015 155.158 13.3015C154.831 13.3015 154.473 13.3015 154.072 13.3059C153.67 13.3059 153.243 13.3103 152.793 13.319C152.344 13.3234 151.868 13.3321 151.397 13.3321C150.917 13.3321 150.441 13.3365 149.957 13.3452C149.473 13.3496 149.006 13.3584 148.561 13.3627L150.786 15.243V22.0861L148.556 23.9663L155.878 23.9576ZM154.578 14.9106H155.625C155.839 14.9106 156.057 14.915 156.289 14.9281C156.52 14.9412 156.742 14.9675 156.965 15.0025C157.183 15.0374 157.393 15.0987 157.589 15.173C157.785 15.2473 157.96 15.3479 158.108 15.4791C158.261 15.6015 158.374 15.7589 158.462 15.947C158.545 16.135 158.593 16.358 158.593 16.6203C158.593 16.957 158.531 17.2412 158.414 17.4555C158.296 17.6698 158.117 17.8403 157.868 17.9627C157.628 18.0852 157.31 18.1726 156.939 18.2163C156.568 18.2601 156.127 18.2819 155.625 18.2819H154.578V14.9106Z" fill="white" />
                  <path d="M99.3576 23.9576H112.313V20.4595L109.381 22.2654H105.148V19.1215H109.464V17.4992H105.148V15.0549H109.381L112.247 17.0314L112.387 13.3627H99.3576L101.369 15.243V22.0774L99.3576 23.9576Z" fill="white" />
                  <path d="M117.929 23.9576H123.654V18.9597H127.603V23.9576H133.319L131.312 22.0774V15.243L133.184 13.3627H127.603V17.4074H123.654V13.3627H117.929L119.945 15.2298V22.0774L117.929 23.9576Z" fill="white" />
                  <path d="M112.701 31.0063L114.451 28.4745H103.11L105.187 30.9188L100.632 40.2719L97.7823 42.7687H106.793L104.013 40.2719L104.467 39.2225H110.851L111.266 40.2719L109.162 42.7687H119.321L116.777 40.2457L112.701 31.0063ZM105.384 37.1411L107.832 31.5179L110.048 37.1411H105.384Z" fill="white" />
                  <path d="M93.109 30.7614L96.9707 33.4244L97.1627 28.4745H79.5777L82.2962 31.0063V40.2369L79.5777 42.7687H97.0667V38.055L93.109 40.4861H87.3928V36.2491H93.2268V34.054H87.3928V30.7614H93.109Z" fill="white" />
                  <path d="M154.294 31.0063V35.5188C154.294 36.236 154.26 36.8656 154.185 37.4034C154.12 37.9413 154.011 38.4004 153.88 38.7896C153.749 39.1744 153.588 39.4936 153.396 39.7472C153.204 40.0008 152.985 40.1976 152.737 40.3462C152.488 40.4949 152.217 40.5955 151.921 40.6523C151.624 40.7092 151.301 40.7354 150.965 40.7354C150.402 40.7354 149.913 40.6436 149.495 40.4643C149.071 40.2763 148.722 39.9789 148.447 39.5679C148.172 39.1525 147.963 38.6147 147.823 37.95C147.684 37.2898 147.614 36.4765 147.614 35.5232V31.0019L150.075 28.4789H139.895L142.618 31.0019V36.1223C142.618 37.2941 142.749 38.3173 143.019 39.1962C143.29 40.0751 143.722 40.8097 144.324 41.3957C144.926 41.9816 145.716 42.4232 146.689 42.7162C147.662 43.0092 148.849 43.1578 150.258 43.1578C150.93 43.1578 151.563 43.1185 152.156 43.0266C152.754 42.9436 153.3 42.7905 153.801 42.585C154.308 42.3751 154.757 42.0996 155.158 41.7498C155.564 41.4044 155.896 40.9715 156.175 40.4512C156.45 39.9308 156.664 39.3099 156.812 38.5972C156.961 37.8801 157.039 37.058 157.039 36.1223V31.0063L159.518 28.4745H152.187L154.294 31.0063Z" fill="white" />
                  <path d="M132.979 37.9456V40.438C132.643 40.6523 132.267 40.8009 131.853 40.884C131.443 40.9627 130.954 41.0065 130.382 41.0065C129.741 41.0065 129.121 40.8884 128.541 40.6566C127.956 40.4249 127.441 40.0751 127.005 39.6247C126.573 39.17 126.215 38.6059 125.958 37.9325C125.691 37.2547 125.565 36.4764 125.565 35.5975C125.565 34.6705 125.683 33.8703 125.918 33.2013C126.158 32.5279 126.481 31.9726 126.887 31.531C127.293 31.0893 127.773 30.7701 128.31 30.5559C128.851 30.346 129.422 30.2323 130.024 30.2323C130.57 30.2323 131.107 30.2979 131.622 30.4422C132.145 30.5777 132.634 30.7789 133.096 31.0456C133.559 31.3123 133.982 31.6359 134.362 32.0207C134.75 32.4055 135.077 32.8515 135.348 33.3456H137.809V28.4833H135.64L134.899 29.454C134.532 29.2528 134.126 29.0692 133.694 28.9074C133.262 28.7369 132.804 28.5969 132.328 28.4789C131.848 28.3608 131.355 28.2646 130.854 28.2034C130.347 28.1378 129.841 28.1028 129.339 28.1028C128.506 28.1028 127.69 28.1772 126.891 28.3171C126.097 28.457 125.351 28.68 124.64 28.973C123.929 29.266 123.283 29.6289 122.694 30.0618C122.109 30.4947 121.594 30.9975 121.167 31.5747C120.739 32.1563 120.407 32.8034 120.172 33.5249C119.936 34.2464 119.818 35.0466 119.818 35.9036C119.818 36.8175 119.936 37.622 120.172 38.3348C120.407 39.0475 120.748 39.6641 121.18 40.2063C121.612 40.7441 122.126 41.1988 122.729 41.5705C123.326 41.9422 123.99 42.2527 124.71 42.4888C125.434 42.7249 126.206 42.8954 127.027 42.996C127.847 43.1053 128.694 43.1534 129.566 43.1534C130.072 43.1534 130.579 43.1315 131.076 43.0791C131.574 43.0353 132.053 42.9479 132.529 42.843C133 42.7336 133.454 42.5893 133.886 42.4144C134.318 42.2395 134.724 42.0253 135.108 41.7717L135.636 42.7686H137.927V35.1559H130.16L132.979 37.9456Z" fill="white" />
                  <path d="M142.552 24.115C143.098 24.0232 143.617 23.8833 144.119 23.6909C144.62 23.4985 145.087 23.258 145.524 22.9563C145.964 22.6633 146.344 22.3091 146.667 21.8937C146.994 21.4827 147.252 21.0017 147.439 20.4683C147.627 19.9304 147.719 19.327 147.719 18.658C147.719 17.9802 147.627 17.3724 147.448 16.8259C147.269 16.2837 147.02 15.807 146.706 15.3916C146.383 14.9806 146.012 14.6264 145.58 14.3291C145.148 14.0318 144.686 13.8 144.184 13.612C143.682 13.424 143.159 13.2884 142.609 13.2053C142.059 13.1223 141.501 13.0742 140.946 13.0742C140.44 13.0742 139.921 13.1179 139.393 13.2053C138.865 13.2884 138.346 13.424 137.844 13.612C137.342 13.8 136.871 14.0361 136.43 14.3291C135.985 14.6221 135.597 14.9719 135.265 15.3916C134.933 15.807 134.676 16.2837 134.475 16.8259C134.283 17.3681 134.187 17.9759 134.187 18.658C134.187 19.3532 134.283 19.9742 134.467 20.512C134.654 21.0586 134.907 21.5396 135.23 21.9506C135.553 22.3616 135.933 22.7158 136.373 23.0044C136.805 23.293 137.281 23.5291 137.778 23.7171C138.276 23.9051 138.795 24.0319 139.336 24.1194C139.877 24.2025 140.41 24.2418 140.942 24.2418C141.47 24.2462 142.007 24.1981 142.552 24.115ZM139.912 22.4228C139.602 22.2129 139.332 21.9243 139.109 21.5658C138.882 21.1985 138.708 20.77 138.586 20.2802C138.464 19.7818 138.398 19.2483 138.398 18.6624C138.398 18.0852 138.459 17.5473 138.586 17.0445C138.712 16.5416 138.882 16.1044 139.109 15.7283C139.336 15.3567 139.607 15.0637 139.912 14.8494C140.218 14.6352 140.567 14.5259 140.938 14.5259C141.326 14.5259 141.675 14.6352 141.989 14.8494C142.303 15.0637 142.574 15.3567 142.801 15.7283C143.028 16.1 143.194 16.5416 143.311 17.0445C143.429 17.5517 143.49 18.0939 143.49 18.6624C143.49 19.2308 143.429 19.7686 143.303 20.2627C143.172 20.7612 142.997 21.1897 142.775 21.5483C142.548 21.9112 142.277 22.2042 141.963 22.4097C141.653 22.624 141.309 22.7245 140.938 22.7245C140.562 22.7333 140.226 22.6283 139.912 22.4228Z" fill="white" />
                  <path d="M173.228 30.7614L177.09 33.4244L177.282 28.4745H159.696L162.415 31.0063V40.2369L159.696 42.7687H177.186V38.055L173.228 40.4861H167.516V36.2491H173.346V34.054H167.516V30.7614H173.228Z" fill="white" />
                  <path d="M173.324 13.3627L175.331 15.243V18.6842L169.554 13.3627H164.069L166.281 15.4441V22.0774L164.335 23.9576H170.392L168.232 22.0774V17.2806L175.331 23.9576H177.282V15.243L179.084 13.3627H173.324Z" fill="white" />
                  <path d="M39.6907 42.9698C37.5177 42.0603 34.8036 41.3519 31.5527 40.8403C25.963 40.0533 15.604 41.0502 15.6302 37.9063L16.7298 24.3337C14.1073 25.9122 12.3968 27.2371 9.54744 25.7635C9.17217 27.0228 9.84416 27.9017 10.6601 28.7282C8.57873 28.9118 6.41006 28.3434 4.15848 27.2021C4.30684 27.823 4.04066 29.4671 4.75628 31.1375C5.45444 32.7772 1.40509 31.4654 0.654561 30.9888C0.824738 32.2875 0.960008 33.7086 2.80142 34.2901C2.50906 35.4008 1.14764 35.5976 0.00439453 35.2477C0.685105 37.3816 1.87199 37.0318 3.57813 38.5928C3.04578 39.5898 1.57527 39.7515 0.64147 39.4061C1.64945 41.7367 2.30834 44.2204 4.65592 45.6983H13.6841H14.1597H14.3517H14.6353H15.0062H31.9498C36.1868 45.6983 41.0696 45.6983 44.0542 45.6983C42.9197 44.5177 41.4579 43.6607 39.6907 42.9698Z" fill="white" />
                  <path d="M69.6201 40.4861V31.0063L73.3073 28.4745H61.8007L64.5191 31.0063V40.2369L61.8007 42.7687H78.705V36.9574L74.7472 40.4861H69.6201Z" fill="white" />
                  <path d="M55.3558 30.8314C52.982 28.9861 52.6286 26.7167 51.8082 25.5711C48.9981 25.2388 48.1341 21.8981 47.3356 18.4612C46.8163 19.3226 46.5458 20.4289 46.4847 21.7319C41.9815 14.5871 38.1853 11.6924 35.061 12.838C38.2856 14.1629 39.7867 16.3492 39.887 19.2395C37.3038 17.3331 34.5025 15.8814 30.8022 16.323C32.5258 16.9177 33.7956 17.7222 33.2152 19.3795C32.072 19.5237 30.9549 19.6899 29.8727 19.8779L30.776 31.1418C30.9505 31.1068 31.1338 31.0762 31.3171 31.0412C31.3651 32.5279 31.2298 32.4667 31.7883 33.3325C33.2021 35.5144 38.4558 35.8642 41.2179 39.0737C42.0994 35.427 32.9185 34.5874 36.4355 30.3416C37.522 30.5122 39.0187 29.9962 39.8129 30.5384C39.3067 31.4523 38.4427 31.7496 37.2209 31.426C37.2166 33.127 39.2325 33.5599 41.1612 35.5232C42.5881 36.9749 42.0732 38.7983 42.8237 39.7384C43.5001 40.5867 46.1662 40.4205 48.8323 41.0371C51.673 41.6929 54.5311 43.0878 55.5303 42.6331C55.2598 41.0152 57.8692 39.5679 57.3106 38.431C56.5557 39.0431 51.4286 38.1905 50.5995 37.9806C49.7443 37.7095 49.4737 36.5726 48.1167 35.803C48.8628 35.838 51.001 36.9137 51.9566 37.4952C51.1537 33.1357 44.1371 34.8585 45.1407 30.3154C48.1123 30.8445 50.2592 34.6224 52.9733 34.6836C52.9384 35.0815 52.6198 35.4401 52.1835 35.7855C53.4184 36.1179 54.3434 35.5494 55.2467 34.8979C55.1987 35.3264 54.7274 35.6806 54.2431 36.0304C55.3601 36.1572 56.1718 35.7462 56.8743 35.134C56.9092 35.4751 56.8656 35.8511 56.7957 36.2403C58.2313 35.7593 58.6982 34.8323 59.139 33.8922C59.1739 33.1357 59.187 32.8559 59.2219 32.095C58.9208 31.9857 58.6197 31.872 58.3186 31.7627C57.0532 31.719 56.0147 31.4566 55.3558 30.8314ZM50.8657 29.9874C50.2068 30.1973 49.8446 30.3285 49.1465 30.3329C48.0556 30.3416 47.4011 28.8462 47.1916 27.9585C47.1392 27.7312 47.1 27.5038 47.0782 27.272L46.9822 26.192L47.9334 26.708C48.121 26.8085 48.3087 26.9004 48.5007 26.9966C49.5174 27.5169 50.281 28.2165 51.097 29.0123L51.7908 29.6945L50.8657 29.9874Z" fill="white" />
                </svg>
              </Link>
            </li>
            {isShowNavigation ? <Navigation /> : ''}
          </ul>
          <ul
            className="navbar-nav nav-pills"
          >
            <li className="nav-item">
              <button type="button" className="nav-link">Войти</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );
};

Header.propTypes = {
  isShowNavigation: PropTypes.bool,
  classHeader: PropTypes.string,
};

Header.defaultProps = {
  isShowNavigation: false,
  classHeader: '',
};

export default memo(Header);
