"use client"

import Link from "next/link"
import styles from "./Homepage.module.css"
import { SideBar } from "../components/sidebar-nav/Sidebar"
import { Footer } from "../components/footer/Footer"
import { motion } from "framer-motion"



export const HomePage = () => {
  return (
    <div className={styles.homePage}>

      <div className={styles.searchBarContainer}>

        <p className={styles.trio}>trio</p>

      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

        <input type="text" name="" id="headerSearchbar" className={styles.headerSearchbar} placeholder="What are you looking for?"/>

      </div>

      <nav className={styles.nav}>
        <SideBar />
        <Link href="/">Home</Link>
        <Link href="/law">Legal</Link>
        <Link href="/education">Education</Link>
        <Link href="/tech">IT</Link>
      </nav>



<section className={styles.title}>
      <div className={styles.logoContainer}>
        <img src="/images/triologo.jpeg" alt="trio-logo" />
      </div>
      
<div className={styles.titleTextContainer}>
      <h1 className={styles.titleText}>Trio Nexus</h1>
      <p>We are result makers</p>
</div>
</section>




      {/* <p className={styles.serviceText}>What we can do for you:</p> */}

      {/* <ul className={styles.servicesList}>
        <li className={styles.law}>
          <Link href="/law">Legal - Services
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, saepe!</p>
          </Link>
        </li>

        <li className={styles.education}>
          <Link href="/education">Education - Services 
          
          </Link>
        </li>

        <li className={styles.tech}>
          <Link href="/tech">Technological - Services
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis?</p>
          </Link>
        </li>
      </ul> */}

<section className={styles.servicesSection}>

      <ul className={styles.servicesList}>

        <li className={styles.law}>
          <Link href="/law">

          <div className={styles.lawImageContainer}>
            <img src="/images/trio-law-logo.jpeg" alt="trio-law-logo" />
          </div>

          <div className={styles.lawText}>
            <h3>Law</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, saepe!</p>
          </div>

          <button className={styles.serviceCTA}>get free consultation</button>

          </Link>
        </li>

        <li className={styles.education}>
          <Link href="/education">
          <div className={styles.educationImageContainer}>
            <img src="/images/trio-education-logo.jpeg" alt="fame-logo" />
          </div>

          <div className={styles.educationText}>
            <h3>Education</h3>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</p>
          </div>

          <button className={styles.serviceCTA}>book lesson</button>
          </Link>
        </li>

        <li className={styles.tech}>
          <Link href="/tech">

          <div className={styles.techImageContainer}>
            <img src="/images/trio-news-network-logo.jpeg" alt="tech-logo" />
          </div>

          <div className={styles.techText}>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis?</p>
          </div>

          <button className={styles.serviceCTA}>scedule meeting</button>

          </Link>
        </li>
      </ul>
</section>
{/* ---------------BLOG ARTICLES---------------  */}
{/* all these articles need to be generated programatically like the cart items via an articles component */}

      <section className={styles.blogArticles}>

        <h2 className={styles.blogArticlesTitle}>Blog Articles</h2>

      <motion.div
      // initial={{ opacity: 0, x: 20 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // viewport={{ once: true }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={styles.blogArticleWrapper}>

        <div className={styles.blogArticle}>

          <div className={styles.blogArticleImageContainer}>
            <img src="/images/article-photo.jpg" alt="article-image" loading="lazy" />
          </div>

          <div className={styles.blogArticleText}>
            <h3>Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
          <button className={styles.blogArticleButton}>read more</button>

          </div>


        </div>

        <div className={styles.blogArticle}>

      <div className={styles.blogArticleImageContainer}>
        <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
      </div>

      <div className={styles.blogArticleText}>
        <h3>Title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
      <button className={styles.blogArticleButton}>read more</button>
      </div>



      </div>

  <div className={styles.blogArticle}>

    <div className={styles.blogArticleImageContainer}>
      <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
    </div>

    <div className={styles.blogArticleText}>
      <h3>Title</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
    <button className={styles.blogArticleButton}>read more</button>
    </div>


  </div>

  
  <div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
<button className={styles.blogArticleButton}>read more</button>
</div>



  </div>

</motion.div>

<motion.div 
  initial={{ y: 100, opacity: 0 }} 
  whileInView={{ y: 0, opacity: 1 }} 
  viewport={{ once: true, amount: 0.2 }} 
  transition={{ duration: 1 }}
  className={styles.blogArticlesWrapper2}>

<div className={styles.blogArticle2}>

<div className={styles.blogArticleImageContainer2}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText2}>
  <h3>Title</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <div className={styles.author}>
      <div className={styles.authorImg}></div>

    <div className={styles.authorCredentials}>
          <p className={styles.authorName}>Author Name</p>
          <p className={styles.authorProfession}>Author Profession</p>
          <p className={styles.publishDate}>23-1-2025</p>
          
    </div>

  </div>
  
<button className={styles.blogArticleButton}>read more</button>


</div>

</div>

{/* <div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
</div>

</div>

<div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
</div>

</div> */}
</motion.div>

  <div className={styles.blogArticles3}>

  <div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.a}>
<div className={styles.articleTags}>
      <p>Law</p>
      <p>Family</p>
    </div>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>

  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
</div>

  </div>

  <div className={styles.blogArticles3}>

<div className={styles.blogArticleImageContainer}>
<img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.a}>
<div className={styles.articleTags}>
    <p>Law</p>
    <p>Family</p>
  </div>
<h3>Title</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>

<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
</div>

</div>

<div className={styles.blogArticles3}>

<div className={styles.blogArticleImageContainer}>
<img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.a}>
<div className={styles.articleTags}>
    <p>Law</p>
    <p>Family</p>
  </div>
<h3>Title</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>

<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
</div>

</div>

      </section>

      <Footer />

    </div>

  )
}