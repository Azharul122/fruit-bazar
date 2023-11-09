'use client';
import { useEffect } from "react";
import { FaHamburger, FaPhone, FaSun } from "react-icons/fa";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // if(isMobileMenuOpen){
  //   const fruitFuilter=document.querySelector(".fruitFuilter")
  //   fruitFuilter.classList.add("block")
  // }
  // const openFruitMenue=()=>{
  //   // alert("click")
  //   const fruitFuilter=document.querySelector(".fruitFuilter")
  //   fruitFuilter.classList.add("block")
  //   fruitFuilter.classList.remove("none")
  //   const mobilez=document.querySelector(".mobilez")
  //   mobilez.classList.toggle("hidden")
    
  // }
 
  return (
    <div className="header w-full py-2">
      <div className="w-[96%] md:w-[94%] mx-auto">
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="36"
            viewBox="0 0 72 36"
            fill="none"
          >
            <g clip-path="url(#clip0_1_450)">
              <path
                d="M22.6796 10.6828L22.5321 11.7187H20.1945C19.632 18.3164 19.2135 23.6896 18.7401 26.1747C17.8826 30.6715 13.7117 33.1858 10.9899 33.1858C10.0724 33.1858 8.85986 32.6832 8.85986 31.5873C8.85986 30.9665 9.39324 30.4932 10.0141 30.4932C10.9899 30.4932 11.7291 31.1723 12.2333 31.9715C13.7117 31.1432 13.9192 30.4623 14.5109 27.5056C14.7767 26.1747 15.6394 16.5105 16.0836 11.7187H14.2485L14.396 10.6828H16.2293L16.4952 9.057C17.5002 2.93435 22.0261 2.25348 23.6228 2.25348C24.4804 2.25348 26.1662 2.66852 26.1662 3.76099C26.1662 4.52932 25.5454 4.85689 24.8354 4.85689C23.7412 4.85689 23.2387 4.17603 22.707 3.28764C20.8136 4.116 20.4878 8.64196 20.3111 10.6828H22.6796Z"
                fill="url(#paint0_linear_1_450)"
              />
              <path
                d="M28.8468 31.2598C25.788 33.7724 21.9508 35.1432 17.9924 35.1374C8.52884 35.1374 0.857515 27.4644 0.857515 18.0026C0.857515 8.53733 8.53055 0.86429 17.9941 0.86429C21.0109 0.863625 23.9744 1.65997 26.5846 3.17271C29.1948 4.68545 31.359 6.8609 32.8582 9.47888C33.251 9.56635 33.6352 9.67268 34.009 9.80131C32.5001 6.85251 30.2064 4.37758 27.3805 2.64933C24.5547 0.921084 21.3065 0.00663276 17.9941 0.00677492C8.05549 0.00677492 0 8.06227 0 18.0009C0 27.9377 8.05549 35.9932 17.9941 35.9932C22.683 35.9932 26.9534 34.1976 30.1554 31.258L28.8468 31.2598Z"
                fill="#634313"
              />
              <path
                d="M36.1254 14.7337C36.1254 11.5695 34.2028 10.1186 30.9477 10.1186C25.6534 10.1186 22.4583 14.3496 22.4583 19.2288C22.4583 21.3692 23.3398 22.7223 24.9177 23.3758H30.5087C34.0622 22.1512 36.1254 18.6543 36.1254 14.7337ZM26.7493 18.4622C26.7493 16.5397 27.1335 11.2454 29.8844 11.2454C31.7469 11.2454 31.8361 14.2621 31.8361 15.5329C31.8361 17.4263 31.4519 22.7206 28.701 22.7206C26.8368 22.7206 26.7493 19.7039 26.7493 18.4622ZM50.9141 14.7337C50.9141 11.5695 48.9915 10.1186 45.7364 10.1186C40.4421 10.1186 37.247 14.3496 37.247 19.2288C37.247 21.3692 38.1302 22.7223 39.7064 23.3758H45.2974C48.8526 22.1512 50.9141 18.6543 50.9141 14.7337ZM41.538 18.4622C41.538 16.5397 41.9222 11.2454 44.6731 11.2454C46.5356 11.2454 46.6248 14.2621 46.6248 15.5329C46.6248 17.4263 46.2406 22.7206 43.4897 22.7206C41.6255 22.7206 41.538 19.7039 41.538 18.4622ZM60.6743 18.8464L60.7343 18.9064C60.5868 20.5631 60.5268 21.4206 60.5268 22.0415C60.5268 22.3639 60.5182 22.9607 60.688 23.3792H63.9877C65.0216 23.0707 66.0301 22.6831 67.0045 22.2198L66.7387 21.3915C65.8211 21.7173 65.142 21.954 64.9344 21.954C64.5503 21.954 64.5503 21.4515 64.5503 21.0656C64.5503 19.6456 66.5912 5.59434 66.5912 2.87431C66.5912 2.43011 66.502 2.43011 66.2361 2.43011C64.1953 2.49014 61.916 2.96349 59.8168 3.70267L60.0826 4.56018C61.1185 4.23604 61.5318 4.14686 61.7977 4.14686C62.1527 4.14686 62.1527 4.44184 62.1527 4.7677C62.1527 5.74355 62.1235 7.10357 61.7085 10.3278H60.6434C55.5258 10.3278 51.8573 15.1505 51.8573 19.7948C51.8573 21.1171 52.3221 22.6332 53.3769 23.3792H56.7212C58.4928 22.4805 59.87 20.4534 60.6743 18.8464ZM61.0876 11.4512C61.2351 11.4512 61.4135 11.482 61.561 11.5403C61.1751 14.2913 60.9401 15.9771 60.2301 17.8105C59.8459 18.8172 58.6917 21.0348 57.39 21.0348C56.4433 21.0348 56.2958 19.4672 56.2958 18.8172C56.2958 16.1847 57.8342 11.4512 61.0876 11.4512Z"
                fill="url(#paint1_linear_1_450)"
              />
              <path
                d="M63.9878 23.3775H20.2888V30.4246H67.3784V23.3775H63.9878Z"
                fill="#634313"
              />
              <path
                d="M23.1254 24.9982H24.2419L25.7357 27.226H25.746V24.9982H26.6687V29.1966H25.7683L24.0567 26.8196H24.0464V29.1966H23.1237V24.9982H23.1254ZM29.3887 24.9982H32.5478V25.8643H30.5875V26.6258H31.8429V27.4918H30.5875V28.2979H32.6095V29.1966H29.3887V24.9982ZM36.0139 25.8317H34.8597V24.9982H38.3686V25.8317H37.2144V29.1966H36.0139V25.8317ZM40.4918 24.9982H41.6803L42.2583 27.2432H42.2686L42.8637 24.9982H43.8636L44.4364 27.2432H44.4467L45.0349 24.9982H45.9782L44.8617 29.1966H43.8361L43.2427 26.9585H43.2307L42.6373 29.1966H41.61L40.4918 24.9982ZM50.1714 29.2738C48.9212 29.2738 48.1666 28.4368 48.1666 27.0974C48.1666 25.758 48.9212 24.921 50.1714 24.921C51.4217 24.921 52.1763 25.758 52.1763 27.0974C52.1763 28.4368 51.42 29.2738 50.1714 29.2738ZM49.4323 27.0974C49.4323 28.2259 49.7598 28.442 50.1714 28.442C50.5762 28.442 50.9106 28.2259 50.9106 27.0974C50.9106 26.0306 50.6379 25.7528 50.1714 25.7528C49.6878 25.7545 49.4323 26.0821 49.4323 27.0974ZM54.6957 24.9982H56.7057C58.1052 24.9982 58.3779 25.6653 58.3779 26.209C58.3779 26.7321 58.0503 27.0802 57.5838 27.2637L58.3676 29.1966H57.035L56.4399 27.4747H55.8962V29.1966H54.6974L54.6957 24.9982ZM55.8945 26.6755H56.5171C56.8618 26.6755 57.1122 26.5263 57.1122 26.2536C57.1122 25.9861 56.939 25.7991 56.5685 25.7991H55.8962L55.8945 26.6755ZM61.0139 24.9982H62.2127V26.6806H62.223L63.4509 24.9982H64.5948L63.5624 26.3874L64.8675 29.1983H63.5847L62.758 27.4044L62.2144 28.1316V29.1983H61.0156L61.0139 24.9982Z"
                fill="white"
              />
              <path
                d="M69.6045 28.5688V28.7901H68.9802V30.4142H68.7298V28.7901H68.1055V28.5688H69.6045ZM70.1859 28.5688L70.7141 30.1295H70.7192L71.244 28.5688H71.599V30.4142H71.3572V29.2343L71.3624 28.8673L71.3572 28.8638L70.8376 30.4142H70.5906L70.071 28.8673L70.0658 28.8638L70.071 29.3166V30.4159H69.8291V28.5706H70.1859V28.5688Z"
                fill="#634313"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_450"
                x1="17.513"
                y1="2.25348"
                x2="17.513"
                y2="33.1858"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA800" />
                <stop offset="1" stop-color="#EE5601" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_450"
                x1="44.7314"
                y1="2.43011"
                x2="44.7314"
                y2="23.3792"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA800" />
                <stop offset="1" stop-color="#FE7008" />
              </linearGradient>
              <clipPath id="clip0_1_450">
                <rect width="71.599" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* Search Bar */}
          <div className="desktop-serachbar hidden md:block w-[90px] md:w-[300px] h-[40px] relative">
            <input
            placeholder="Search Best Food"
              type="text"
              className="border border-pink-300 w-full rounded-md h-full px-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 25 24"
              fill="none"
              className="absolute top-1/2 right-[5px] -translate-y-1/2 bg-[#E655271A] rounded-md"
            >
              <path
                d="M19.5 18L15.8333 14.3333M17.3889 10.4444C17.3889 11.1594 17.2481 11.8674 16.9745 12.5279C16.7008 13.1885 16.2998 13.7887 15.7942 14.2942C15.2887 14.7998 14.6885 15.2008 14.0279 15.4745C13.3674 15.7481 12.6594 15.8889 11.9444 15.8889C11.2295 15.8889 10.5215 15.7481 9.86095 15.4745C9.2004 15.2008 8.6002 14.7998 8.09464 14.2942C7.58908 13.7887 7.18804 13.1885 6.91443 12.5279C6.64082 11.8674 6.5 11.1594 6.5 10.4444C6.5 9.00049 7.07361 7.61567 8.09464 6.59464C9.11567 5.57361 10.5005 5 11.9444 5C13.3884 5 14.7732 5.57361 15.7942 6.59464C16.8153 7.61567 17.3889 9.00049 17.3889 10.4444Z"
                stroke="#E65527"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">
          <div className="mobile-serachbar  md:hidden w-[40px] md:w-[300px] h-[40px] relative">
            <input
            placeholder="Search Best Food"
              type="text"
              className="border hidden  border-pink-300 w-full rounded-md h-full px-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 25 24"
              fill="none"
              className="absolute top-1/2 right-[5px] -translate-y-1/2 bg-[#E655271A] rounded-md"
            >
              <path
                d="M19.5 18L15.8333 14.3333M17.3889 10.4444C17.3889 11.1594 17.2481 11.8674 16.9745 12.5279C16.7008 13.1885 16.2998 13.7887 15.7942 14.2942C15.2887 14.7998 14.6885 15.2008 14.0279 15.4745C13.3674 15.7481 12.6594 15.8889 11.9444 15.8889C11.2295 15.8889 10.5215 15.7481 9.86095 15.4745C9.2004 15.2008 8.6002 14.7998 8.09464 14.2942C7.58908 13.7887 7.18804 13.1885 6.91443 12.5279C6.64082 11.8674 6.5 11.1594 6.5 10.4444C6.5 9.00049 7.07361 7.61567 8.09464 6.59464C9.11567 5.57361 10.5005 5 11.9444 5C13.3884 5 14.7732 5.57361 15.7942 6.59464C16.8153 7.61567 17.3889 9.00049 17.3889 10.4444Z"
                stroke="#E65527"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
            <div className="bg-[#E655271A] rounded-md w-[30px] h-[30px] flex justify-center items-center">
              <FaSun className=" text-lg text-[#E55527]" />
            </div>
            <div className="bg-[#E655271A] mobilez rounded-md w-[30px] h-[30px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                className="bg-[#E655271A] rounded-md"
              >
                <path
                  d="M9.62498 3.95831V14.375C9.62498 15.0744 9.62498 15.4241 9.50068 15.6962C9.36336 15.9971 9.12205 16.2384 8.82117 16.3757C8.54909 16.5 8.19939 16.5 7.49998 16.5C5.63489 16.5 4.70234 16.5 3.97679 16.1686C3.17445 15.8022 2.53108 15.1588 2.16466 14.3565C1.83331 13.6309 1.83331 12.6984 1.83331 10.8333V7.49998C1.83331 5.63489 1.83331 4.70234 2.16466 3.97679C2.53108 3.17445 3.17445 2.53108 3.97679 2.16466C4.70234 1.83331 5.63489 1.83331 7.49998 1.83331C8.19939 1.83331 8.54909 1.83331 8.82117 1.95757C9.12205 2.09498 9.36336 2.33624 9.50068 2.63712C9.62498 2.9092 9.62498 3.2589 9.62498 3.95831Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.72936 12.8333H5.72113"
                  stroke="#101010"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.271 9.16669H16.2628"
                  stroke="#101010"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.72919 5.04169V7.79169M4.35419 6.41669H7.10419"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.375 18.0417V7.625C12.375 6.92559 12.375 6.57588 12.4993 6.30381C12.6366 6.00293 12.8779 5.76166 13.1788 5.62425C13.4509 5.5 13.8006 5.5 14.5 5.5C16.3651 5.5 17.2976 5.5 18.0232 5.83135C18.8255 6.19777 19.4689 6.84114 19.8353 7.64348C20.1667 8.36903 20.1667 9.3016 20.1667 11.1667V14.5C20.1667 16.3651 20.1667 17.2976 19.8353 18.0232C19.4689 18.8255 18.8255 19.4689 18.0232 19.8353C17.2976 20.1667 16.3651 20.1667 14.5 20.1667C13.8006 20.1667 13.4509 20.1667 13.1788 20.0424C12.8779 19.905 12.6366 19.6638 12.4993 19.3628C12.375 19.0908 12.375 18.7411 12.375 18.0417Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2708 16.9583V14.2083M17.6458 15.5833H14.8958"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div  className=" bg-[#5a53511a] rounded-md w-[30px] h-[30px] flex justify-center items-center">
              <GiHamburgerMenu    className="fruitFuilter-expander cursor-pointer text-lg text-[#001]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
