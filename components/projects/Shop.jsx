import React from 'react'
import { BsGithub, BsFillLaptopFill } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";

const Shop = () => {
    return (
        <ProjectWrapper
            image={"/images/projects/shop/dashboard.png"}
            thumbnail={"/images/projects/shop/user_screen_1.png"}
            title={'Shop'}
            tools={'NestJs, Mysql, NextJs, TypeScript and Flutter'}
            isApp={true}
        >
            <p className="p-3 text-[18px]">
                This project includes all essential e-commerce functionalities, 
                such as user authentication (Register, Login, Logout), product search, 
                category-based filtering, an add-to-cart system, order management, and 
                secure payments via Stripe. The admin panel allows efficient management of users, 
                products, categories, variants, and orders.
                <br />
                <br />
                I built a full-featured e-commerce project with a robust backend API using NestJS and MySQL. 
                The admin dashboard is developed with Next.js, TypeScript, Tailwind CSS, 
                and ShadCN UI, ensuring a modern and responsive interface. 
                The user app is built using Flutter, 
                following the Clean Architecture pattern with Bloc for state management and Dio for API handling.
            </p>
            <div className="p-3 flex flex-wrap gap-3 mt-auto">
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/my_shop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                        <BsGithub className="mr-2" />
                        <span className="text-[16px]">Backend API</span>
                    </button>
                </a>
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/shop_admin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                        <BsGithub className="mr-2" />
                        <span className="text-[16px]">Admin Dashboard</span>
                    </button>
                </a>
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/shop_mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                        <BsGithub className="mr-2" />
                        <span className="text-[16px]">User App</span>
                    </button>
                </a>
            </div>
        </ProjectWrapper>
    )
}

export default Shop