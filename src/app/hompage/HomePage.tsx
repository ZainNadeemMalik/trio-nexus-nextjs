"use client"

import Link from "next/link"
import styles from "./Homepage.module.css"
import { SideBar } from "../components/sidebar-nav/Sidebar"
import { Footer } from "../components/footer/Footer"
import { motion } from "framer-motion"



export const HomePage = () => {
  return (
    <div className={styles.homePage}>
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

<section>

      <ul className={styles.servicesList}>

        <li className={styles.law}>
          <Link href="/law">

          <div className={styles.lawImageContainer}>
            <img src="/images/trio-law-logo.jpeg" alt="trio-law-logo" />
          </div>

          <div className={styles.lawText}>
            <h3>Legal - Services</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, saepe!</p>
          </div>

          <button>get free consultation</button>

          </Link>
        </li>

        <li className={styles.education}>
          <Link href="/education">
          <div className={styles.educationImageContainer}>
            <img src="/images/trio-education-logo.jpeg" alt="fame-logo" />
          </div>

          <div className={styles.educationText}>
            <h3>Education - Services</h3>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae?</p>
          </div>

          <button>book lesson</button>
          </Link>
        </li>

        <li className={styles.tech}>
          <Link href="/tech">

          <div className={styles.techImageContainer}>
            <img src="/images/trio-news-network-logo.jpeg" alt="tech-logo" />
          </div>

          <div className={styles.techText}>
            <h3>Technological - Services </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis?</p>
          </div>

          <button>scedule meeting</button>

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
          </div>

          <button className={styles.blogArticleButton}>read more</button>

        </div>

        <div className={styles.blogArticle}>

      <div className={styles.blogArticleImageContainer}>
        <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
      </div>

      <div className={styles.blogArticleText}>
        <h3>Title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
      </div>

      <button className={styles.blogArticleButton}>read more</button>


      </div>

  <div className={styles.blogArticle}>

    <div className={styles.blogArticleImageContainer}>
      <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
    </div>

    <div className={styles.blogArticleText}>
      <h3>Title</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
    </div>

    <button className={styles.blogArticleButton}>read more</button>

  </div>

  
  <div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
</div>

<button className={styles.blogArticleButton}>read more</button>


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
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui quam deleniti mollitia molestiae provident!</p>

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

      </section>

      <Footer />

    </div>

  )
}