"use client";

import Image from "next/image";
import fruit1 from "../../public/1458b1ca9119e918a60e3c151b478f43.png";
import fruit2 from "../../public/301742f431d1c773d903c46616afac1b.png";
import fruit3 from "../../public/355dd0116d8e13a726913922a005e797.png";
import fruit4 from "../../public/57c6a8963499e1764e0b237b693d8bf8.png";
import fruit5 from "../../public/d34466801324f00f59c5f081d8ca76a0.png";
import { BsFacebook, BsTwitter, BsLinkedin, BsTextareaT } from "react-icons/bs";
import { AiOutlineSmallDash } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Home() {
  const [open,setOpen]=useState(false)
  useEffect(() => {
    const humbarger = document.querySelector(".fruitFuilter-expander");
    humbarger.addEventListener("click", () => {
      if(open){
        setOpen(false)
        // document.querySelector(".fruitFuilter").classList.add("ffopen")
        // document.querySelector(".fruitFuilter").classList.remove("ffHidden")
      }
      else{
        setOpen(true)
      }
      // document.querySelector(".fruitFuilter").classList.toggle("ffopen")
        // document.querySelector(".fruitFuilter").classList.remove("ffopen")
        // document.querySelector(".fruitFuilter").classList.add("ffHidden")
    });
  });
  // const humbarger=document.querySelector(".fruitFuilter-expander")
  // humbarger.addEventListener("click",()=>{
  //   alert("hello")
  // })

  const handleclick = () => {
    alert("click");
  };
  return (
    <main className="w-full">
      <div className="w-full ">
        <div className="sideHeaderContainer flex  gap-3 ">
          {/* Side Header */}
          <div className="side-header md:h-[550px]  w-full md:w-[50px] py-2 pl-2 md:py-10 md:flex-col flex justify-center items-center gap-2 md:gap-7">
            <div className="cursor-pointer bg-[#E655271A] rounded-md w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M14.25 15.584C13.5171 16.1545 12.5544 16.5007 11.5 16.5007C10.4457 16.5007 9.48289 16.1545 8.75 15.584"
                  stroke="#E65527"
                  stroke-width="1.5"
                />
                <path
                  d="M2.65609 12.113C2.33249 10.0072 2.17069 8.95431 2.56881 8.02092C2.96692 7.08751 3.85018 6.44888 5.6167 5.17162L6.93656 4.21732C9.13408 2.62843 10.2328 1.83398 11.5007 1.83398C12.7685 1.83398 13.8672 2.62843 16.0647 4.21732L17.3846 5.17162C19.1512 6.44888 20.0344 7.08751 20.4325 8.02092C20.8306 8.95431 20.6688 10.0072 20.3452 12.113L20.0693 13.9087C19.6105 16.8938 19.3811 18.3864 18.3106 19.2769C17.24 20.1673 15.6749 20.1673 12.5446 20.1673H10.4568C7.32645 20.1673 5.76132 20.1673 4.69073 19.2769C3.62015 18.3864 3.39078 16.8938 2.93205 13.9087L2.65609 12.113Z"
                  stroke="#E65527"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="cursor-pointer bg-[#E655271A] rounded-md w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
              >
                <path
                  d="M16.2708 10.1257C18.4224 10.1257 20.1667 8.38143 20.1667 6.22982C20.1667 4.07821 18.4224 2.33398 16.2708 2.33398C14.1192 2.33398 12.375 4.07821 12.375 6.22982C12.375 8.38143 14.1192 10.1257 16.2708 10.1257Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.72982 10.1257C7.88143 10.1257 9.62565 8.38143 9.62565 6.22982C9.62565 4.07821 7.88143 2.33398 5.72982 2.33398C3.57821 2.33398 1.83398 4.07821 1.83398 6.22982C1.83398 8.38143 3.57821 10.1257 5.72982 10.1257Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2708 20.6667C18.4224 20.6667 20.1667 18.9224 20.1667 16.7708C20.1667 14.6192 18.4224 12.875 16.2708 12.875C14.1192 12.875 12.375 14.6192 12.375 16.7708C12.375 18.9224 14.1192 20.6667 16.2708 20.6667Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.72982 20.6667C7.88143 20.6667 9.62565 18.9224 9.62565 16.7708C9.62565 14.6192 7.88143 12.875 5.72982 12.875C3.57821 12.875 1.83398 14.6192 1.83398 16.7708C1.83398 18.9224 3.57821 20.6667 5.72982 20.6667Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="bg-[#E655271A] cursor-pointer rounded-md w-[40px] h-[40px] flex justify-center items-center">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6405 2.85839C17.394 2.60899 17.0875 2.42736 16.7504 2.33105C16.4133 2.23473 16.057 2.22699 15.7161 2.30856L4.71953 4.62471C4.08625 4.71156 3.4898 4.97349 2.99734 5.381C2.50488 5.78852 2.13597 6.32543 1.93217 6.93128C1.72836 7.53712 1.69775 8.18784 1.84378 8.81014C1.98981 9.43244 2.30668 10.0016 2.75871 10.4536L3.93946 11.6336C4.00337 11.6975 4.05405 11.7734 4.0886 11.8569C4.12316 11.9404 4.14091 12.0299 4.14084 12.1202V14.2975C4.14235 14.6037 4.21283 14.9055 4.34702 15.1807L4.34152 15.1855L4.35939 15.2034C4.56078 15.6083 4.88969 15.9357 5.29547 16.1353L5.31334 16.1532L5.31815 16.1477C5.59331 16.2819 5.89517 16.3524 6.20131 16.3539H8.37862C8.56079 16.3537 8.73556 16.4259 8.86453 16.5546L10.0446 17.7346C10.3611 18.0547 10.7378 18.3089 11.153 18.4826C11.5682 18.6564 12.0137 18.7462 12.4638 18.747C12.8389 18.7465 13.2115 18.6853 13.5669 18.5656C14.1672 18.3684 14.7005 18.0075 15.1066 17.5234C15.5127 17.0394 15.7754 16.4515 15.8652 15.8261L18.1848 4.80546C18.2706 4.46158 18.2655 4.10129 18.1701 3.75994C18.0747 3.4186 17.8922 3.10792 17.6405 2.85839ZM4.91266 10.6632L3.73122 9.48312C3.45611 9.21463 3.26329 8.87325 3.1754 8.49903C3.08751 8.12481 3.10818 7.73329 3.235 7.37041C3.35795 6.99812 3.58524 6.66898 3.88984 6.42214C4.19444 6.17529 4.56352 6.02112 4.9532 5.97797L15.8405 3.68588L5.51403 14.0137V12.1202C5.51507 11.8497 5.46246 11.5816 5.35923 11.3315C5.25601 11.0814 5.10422 10.8542 4.91266 10.6632ZM14.5147 15.591C14.4619 15.9706 14.3044 16.328 14.0598 16.6231C13.8152 16.9181 13.4932 17.1391 13.1299 17.2613C12.7666 17.3835 12.3765 17.4021 12.0033 17.3149C11.6301 17.2277 11.2886 17.0382 11.0171 16.7676L9.83498 15.5855C9.64417 15.3936 9.41721 15.2415 9.16723 15.1379C8.91725 15.0344 8.64921 14.9814 8.37862 14.9821H6.48516L16.813 4.6577L14.5147 15.591Z"
                  fill="#101010"
                />
              </svg>
            </div>
            <div className="bg-[#E655271A] cursor-pointer rounded-md w-[40px] h-[40px] flex justify-center items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2244 19.5568C15.15 19.7077 13.749 19.7077 11.8702 19.7077H10.1285C6.43388 19.7077 4.58657 19.7077 3.43879 18.5599C2.29102 17.4122 2.29102 15.5648 2.29102 11.8702V10.1285C2.29102 6.43388 2.29102 4.58657 3.43879 3.43879C4.58657 2.29102 6.43388 2.29102 10.1285 2.29102H11.8702C15.5648 2.29102 17.4122 2.29102 18.5599 3.43879C19.7077 4.58657 19.7077 6.43388 19.7077 10.1285V11.8702C19.7077 12.9777 19.7077 13.9192 19.6768 14.7257C19.6519 15.3719 19.6396 15.6952 19.3948 15.8159C19.1501 15.9366 18.8764 15.7429 18.3288 15.3555L17.0952 14.4827"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7005 11.3612C13.5385 11.9357 12.7728 12.3417 11.2416 13.1537C9.76132 13.9385 9.0212 14.3311 8.42474 14.1733C8.17814 14.108 7.95347 13.9842 7.77226 13.8135C7.33398 13.4008 7.33398 12.6003 7.33398 10.9993C7.33398 9.39839 7.33398 8.59785 7.77226 8.18513C7.95347 8.01451 8.17814 7.89064 8.42474 7.82542C9.0212 7.66767 9.76132 8.06012 11.2416 8.84502C12.7728 9.65698 13.5385 10.063 13.7005 10.6374C13.7673 10.8746 13.7673 11.1241 13.7005 11.3612Z"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="bg-[#E655271A] cursor-pointer rounded-md w-[40px] h-[40px] flex justify-center items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9962 16.5H11.0037"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4998 16.5H16.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49982 16.5H5.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9962 11H11.0037"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9998 5.5H11.0073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4998 11H16.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4998 5.5H16.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49982 11H5.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49982 5.5H5.5073"
                  stroke="#101010"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Home Content */}
          <div className="content bg-[#EEF0F2] rounded-tl-xl">
            <div className="home_content flex  gap-2 m-2">
              <div className={`fruitFuilter  border filterContainer  w-[18%] h-[838px] rounded-xl bg-white p-2 ${open?"ffopen":"ffHidden"}`}>
                <div className="flex items-center border rounded-xl p-1">
                  <div className="button py-1 w-1/2 bg-[#E655271A] text-center rounded-md">
                    Fruits
                  </div>
                  <div className="button py-1 w-1/2 text-center rounded-md">
                    Vagitables
                  </div>
                </div>
                {/* Search Bar */}
                <div className="w-full h-[40px] relative my-4">
                  <input
                    type="text"
                    className="border border-pink-300 w-full rounded-md h-full px-2"
                    placeholder="Search by fruit name"
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
                <div className="">
                  <p className="font-bold">Fruit List</p>
                  <div className="flex items-center p-2  border-[#E55527] border-2 rounded-xl gap-2">
                    <Image src={fruit1} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2  rounded-xl gap-2">
                    <Image src={fruit2} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2  rounded-xl gap-2">
                    <Image src={fruit3} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2  rounded-xl gap-2">
                    <Image src={fruit4} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2  rounded-xl gap-2">
                    <Image src={fruit5} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2  rounded-xl gap-2">
                    <Image src={fruit5} className="w-[42px] h-[42px]" />
                    <div className="">
                      <p>Apples</p>
                      <p>Vitamin C</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fruitDetails w-full md:w-[64%] rounded-xl bg-white p-4">
                <div className="home_content_container flex  gap-2">
                  <div className="mt-24">
                    <div className="socialIcons flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1877F2] flex justify-center items-center">
                        <BsFacebook />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#2867B2] flex justify-center items-center">
                        <BsLinkedin onClick={handleclick} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex justify-center items-center">
                        <BsTwitter />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#E55527] flex justify-center items-center">
                        <AiOutlineSmallDash className="text-white text-xl" />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="md:flex justify-between  gap-2">
                      <div className="">
                        <p className="text-2xl mb-3 font-bold">
                          Health benefits of an avocado
                        </p>
                        <p className="font-bold">Supports eye health: </p>
                        <p className="mb-3">
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy vision and
                          protect against age-related macular degeneration.
                        </p>
                        <p className="font-bold">Supports eye health: </p>
                        <p>
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy vision and
                          protect against age-related macular degeneration.
                        </p>
                      </div>
                      <Image src={fruit2} className="w-1/2 rounded-xl" />
                    </div>
                    <div className="py-7">
                      <p className="font-bold">Supports eye health: </p>
                      <p className="text-justify">
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..
                        Spinach contains high levels of vitamin A and other
                        antioxidants that help maintain healthy vision and
                        protect against age-related macular degeneration..{" "}
                      </p>
                    </div>
                    <div className="md:flex gap-4 items-center">
                      <Image
                        src={fruit4}
                        className="w-[50%] h-full rounded-xl"
                      />
                      <div className="">
                        <p className="font-bold ">Supports eye health:</p>
                        <p className="text-[15px] text-justify">
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy vision and
                          protect against age-related macular degeneration..
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy vision and
                          protect against age-related macular degeneration..
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy vision and
                          protect against age-related macular degeneration..
                          Spinach contains high levels of vitamin A and other
                          antioxidants that help maintain healthy{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3">
                  <p>Was this helpfull?</p>
                  <div className="flex items-center gap-1">
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                        fill="#E55527"
                        stroke="#E55527"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                        fill="#E55527"
                        stroke="#E55527"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                        fill="#E55527"
                        stroke="#E55527"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                        fill="#E55527"
                        stroke="#E55527"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                          stroke="#E55527"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="settings w-full md:w-[18%] rounded-xl bg-white p-2">
                <div className="border p-2 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-1 items-center">
                      {/* IoIosArrowUp */}
                      <BsTextareaT className="text-[#E55527]" />
                      <p className="text-[#E55527]">Settings</p>
                    </div>
                    <IoIosArrowUp className="text-[#E55527]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mb-1">Paragraph font size: </p>
                    <p className="text-[#E55527]">19</p>
                  </div>

                  <input
                    type="range"
                    name="priceRange"
                    id="priceRange"
                    max={100}
                    min={20}
                    className="w-full h-1"
                  />
                  <div className="">
                    <p>Choose vitamin type</p>
                    <select name="" id="" className="w-full py-1">
                      <option value="">All Vitamin</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p>Turn Off Subtitle:</p>

                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
