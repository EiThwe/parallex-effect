import React, { useEffect, useState } from "react";
import "./App.css";
import { navlinks } from "./utils/data";
import stars from "./assets/stars.png";
import burjkhalifa from "./assets/burjkhalifa.png";
import building from "./assets/building.png";
import dubaiText from "./assets/dubaitext.png";
import cloudOne from "./assets/cloud-1.png";
import cloudTwo from "./assets/cloud-2.png";

const App = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
  }, []);

  return (
    <div className="bgColor">
      <nav className="absolute top-0 left-0 w-full px-[100px] py-[30px] flex justify-between items-center z-[100]">
        <h2 className="text-white text-[2em] cursor-default font-bold">
          Travel
        </h2>
        <div className="nav-links">
          {navlinks.map((item, i) => (
            <a
              href="#"
              className="text-white px-[15px] py-[6px] ml-[20px] rounded-[20px] hover:bg-[#00a3b9] first:bg-[#00a3b9] font-semibold"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <section className="parallex relative flex justify-center items-center h-screen">
        <img
          className="absolute h-full top-0 left-0 w-full pointer-events-none"
          src={stars}
          alt="stars"
          style={{
            top: scrollValue * 1,
          }}
        />
        <img
          className="absolute  w-[500px] pointer-events-none opacity-20"
          src={cloudTwo}
          alt="cloud-2"
          style={{
            top: scrollValue * 1 + 50,
            right: scrollValue * 1 + 100,
          }}
        />
        <img
          className="absolute h-full top-0 left-0 w-full pointer-events-none"
          src={burjkhalifa}
          alt="burjkhalifa"
          style={{
            top: scrollValue * 1,
          }}
        />
        <img
          className="absolute  w-[500px] pointer-events-none opacity-50"
          src={cloudOne}
          alt="cloud-1"
          style={{
            top: scrollValue * 1 + 50,
            left: scrollValue * 1 + 100,
          }}
        />
        <img
          className="absolute h-full top-0 left-0 w-full pointer-events-none"
          src={building}
          alt="building"
        />
        <div
          className={`w-screen h-screen  absolute top-0   pointer-events-none flex items-start
         justify-end px-[50px] py-[250px]`}
          style={{
            left: scrollValue * -2,
          }}
        >
          <h2 className="text-white text-[5em] cursor-default font-[400] tracking-wide font-rowdies">
            Let's Explore Dubai
          </h2>
        </div>
        {/* <img
          className="absolute h-full top-0 left-0 w-full pointer-events-none"
          src={dubaiText}
          alt="dubaiText"
          style={{
            left: scrollValue * -2,
          }}
        /> */}
      </section>
      <section className="relative p-[100px] bg-[#040228]">
        <h2 className="text-[3em] text-white mb-[10px] font-semibold">
          Dubai - United Arab Emirates
        </h2>
        <h2 className="text-[2em] text-white mb-[10px] font-semibold">
          Parallex Scrolling Website
        </h2>
        <p className="text-[1em] text-white mb-[10px] font-[300]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet
          consequatur placeat incidunt. Tenetur doloribus quam itaque
          laboriosam, eius veritatis iure accusamus quae quasi dignissimos
          aliquid iusto perspiciatis fugiat expedita. Nostrum necessitatibus
          dolorum blanditiis explicabo natus harum, vitae quia! Hic animi omnis
          dolor. At incidunt ipsum laudantium necessitatibus, possimus sunt
          officia aliquid nihil in ratione nulla iure amet animi! Esse. Ad
          blanditiis harum, rerum reprehenderit rem voluptatem praesentium enim
          labore dolor ipsa sit voluptates hic eum aliquam molestias
          perspiciatis architecto laborum quis reiciendis qui at. Molestiae
          ullam ipsam laborum velit? Eius itaque numquam a possimus cumque
          quidem nostrum, sed dignissimos cupiditate, voluptatum sapiente ipsum
          pariatur sunt, nam ipsa! Suscipit rerum voluptatem iure numquam nemo
          saepe ab et ipsa nesciunt iusto! Odio voluptatibus repudiandae ullam
          omnis unde reprehenderit ea aut aspernatur molestiae optio! Cum
          ducimus illo itaque nostrum. Eius odit quibusdam molestias, veritatis
          eos aspernatur alias molestiae nisi dolores ad. Quidem. Suscipit
          facilis aut aliquam. Quasi totam quos minima illo at, obcaecati cumque
          labore aliquam reprehenderit sit esse earum deleniti placeat
          voluptatibus? Possimus voluptas ad aliquid deleniti! Dolores, nobis.
          Laudantium, quasi. Officiis doloribus cupiditate quod hic voluptates
          optio iusto temporibus natus, est, sint enim quam maxime facere
          praesentium quia nihil! Magni nesciunt, quam quia vel cum rerum
          impedit laboriosam officia ratione. Quasi adipisci deleniti magni
          consequuntur eum rem aspernatur amet veniam aliquid mollitia! Debitis
          aspernatur temporibus dicta iste consequatur, ratione illum fugiat
          vero laudantium asperiores sunt harum expedita soluta itaque odio.
          Deleniti aspernatur pariatur rerum neque, possimus error quas labore
          nihil eum debitis consequuntur asperiores sequi cumque voluptatem fuga
          sint earum fugiat fugit atque nobis, repellat quidem quaerat suscipit?
          Culpa, pariatur. Expedita necessitatibus, neque eius quae numquam
          dignissimos adipisci! Soluta, rerum. Odio eos dicta, voluptate ratione
          voluptates doloribus ea asperiores deserunt reprehenderit quae culpa
          cum, nam vitae et pariatur, perferendis ut. <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet
          consequatur placeat incidunt. Tenetur doloribus quam itaque
          laboriosam, eius veritatis iure accusamus quae quasi dignissimos
          aliquid iusto perspiciatis fugiat expedita. Nostrum necessitatibus
          dolorum blanditiis explicabo natus harum, vitae quia! Hic animi omnis
          dolor. At incidunt ipsum laudantium necessitatibus, possimus sunt
          officia aliquid nihil in ratione nulla iure amet animi! Esse. Ad
          blanditiis harum, rerum reprehenderit rem voluptatem praesentium enim
          labore dolor ipsa sit voluptates hic eum aliquam molestias
          perspiciatis architecto laborum quis reiciendis qui at. Molestiae
          ullam ipsam laborum velit? Eius itaque numquam a possimus cumque
          quidem nostrum, sed dignissimos cupiditate, voluptatum sapiente ipsum
          pariatur sunt, nam ipsa! Suscipit rerum voluptatem iure numquam nemo
          saepe ab et ipsa nesciunt iusto! Odio voluptatibus repudiandae ullam
          omnis unde reprehenderit ea aut aspernatur molestiae optio! Cum
          ducimus illo itaque nostrum. Eius odit quibusdam molestias, veritatis
          eos aspernatur alias molestiae nisi dolores ad. Quidem. Suscipit
          facilis aut aliquam. Quasi totam quos minima illo at, obcaecati cumque
          labore aliquam reprehenderit sit esse earum deleniti placeat
          voluptatibus? Possimus voluptas ad aliquid deleniti! Dolores, nobis.
          Laudantium, quasi. Officiis doloribus cupiditate quod hic voluptates
          optio iusto temporibus natus, est, sint enim quam maxime facere
          praesentium quia nihil! Magni nesciunt, quam quia vel cum rerum
          impedit laboriosam officia ratione. Quasi adipisci deleniti magni
          consequuntur eum rem aspernatur amet veniam aliquid mollitia! Debitis
          aspernatur temporibus dicta iste consequatur, ratione illum fugiat
          vero laudantium asperiores sunt harum expedita soluta itaque odio.
          Deleniti aspernatur pariatur rerum neque, possimus error quas labore
          nihil eum debitis consequuntur asperiores sequi cumque voluptatem fuga
          sint earum fugiat fugit atque nobis, repellat quidem quaerat suscipit?
          Culpa, pariatur. Expedita necessitatibus, neque eius quae numquam
          dignissimos adipisci! Soluta, rerum. Odio eos dicta, voluptate ratione
          voluptates doloribus ea asperiores deserunt reprehenderit quae culpa
          cum, nam vitae et pariatur, perferendis ut. <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet
          consequatur placeat incidunt. Tenetur doloribus quam itaque
          laboriosam, eius veritatis iure accusamus quae quasi dignissimos
          aliquid iusto perspiciatis fugiat expedita. Nostrum necessitatibus
          dolorum blanditiis explicabo natus harum, vitae quia! Hic animi omnis
          dolor. At incidunt ipsum laudantium necessitatibus, possimus sunt
          officia aliquid nihil in ratione nulla iure amet animi! Esse. Ad
          blanditiis harum, rerum reprehenderit rem voluptatem praesentium enim
          labore dolor ipsa sit voluptates hic eum aliquam molestias
          perspiciatis architecto laborum quis reiciendis qui at. Molestiae
          ullam ipsam laborum velit? Eius itaque numquam a possimus cumque
          quidem nostrum, sed dignissimos cupiditate, voluptatum sapiente ipsum
          pariatur sunt, nam ipsa! Suscipit rerum voluptatem iure numquam nemo
          saepe ab et ipsa nesciunt iusto! Odio voluptatibus repudiandae ullam
          omnis unde reprehenderit ea aut aspernatur molestiae optio! Cum
          ducimus illo itaque nostrum. Eius odit quibusdam molestias, veritatis
          eos aspernatur alias molestiae nisi dolores ad. Quidem. Suscipit
          facilis aut aliquam. Quasi totam quos minima illo at, obcaecati cumque
          labore aliquam reprehenderit sit esse earum deleniti placeat
          voluptatibus? Possimus voluptas ad aliquid deleniti! Dolores, nobis.
          Laudantium, quasi. Officiis doloribus cupiditate quod hic voluptates
          optio iusto temporibus natus, est, sint enim quam maxime facere
          praesentium quia nihil! Magni nesciunt, quam quia vel cum rerum
          impedit laboriosam officia ratione. Quasi adipisci deleniti magni
          consequuntur eum rem aspernatur amet veniam aliquid mollitia! Debitis
          aspernatur temporibus dicta iste consequatur, ratione illum fugiat
          vero laudantium asperiores sunt harum expedita soluta itaque odio.
          Deleniti aspernatur pariatur rerum neque, possimus error quas labore
          nihil eum debitis consequuntur asperiores sequi cumque voluptatem fuga
          sint earum fugiat fugit atque nobis, repellat quidem quaerat suscipit?
          Culpa, pariatur. Expedita necessitatibus, neque eius quae numquam
          dignissimos adipisci! Soluta, rerum. Odio eos dicta, voluptate ratione
          voluptates doloribus ea asperiores deserunt reprehenderit quae culpa
          cum, nam vitae et pariatur, perferendis ut. <br />
          <br />
        </p>
      </section>
    </div>
  );
};

export default App;
