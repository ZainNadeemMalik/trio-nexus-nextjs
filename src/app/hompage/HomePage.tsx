import Link from "next/link"
import styles from "./Homepage.module.css"
import { SideBar } from "../components/sidebar-nav/Sidebar"
import { Footer } from "../components/footer/Footer"
// import { motion } from "framer-motion"



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

          </Link>
        </li>
      </ul>

{/* ---------------BLOG ARTICLES---------------  */}
{/* all these articles need to be generated programatically like the cart items via an articles component */}

      <section className={styles.blogArticles}>

        <h2 className={styles.blogArticlesTitle}>Our Blog Articles</h2>

      <div
      // initial={{ opacity: 0, x: 20 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // viewport={{ once: true }}
      className={styles.blogArticleWrapper}>

        <div className={styles.blogArticle}>

          <div className={styles.blogArticleImageContainer}>
            <img src="/images/article-photo.jpg" alt="article-image" loading="lazy" />
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

      </div>

  <div className={styles.blogArticle}>

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

  </div>

</div>

<div className={styles.blogArticlesWrapper2}>

<div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>

  <div className={styles.articleDetails}>
    <div className={styles.authorImg}></div>
    <span className={styles.authorName}>Author Name</span>
  </div>
    <span className={styles.publishDate}>23-1-2025</span>

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

</div>

<div className={styles.blogArticle}>

<div className={styles.blogArticleImageContainer}>
  <img loading="lazy" src="/images/article-photo.jpg" alt="article-image" />
</div>

<div className={styles.blogArticleText}>
  <h3>Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
</div>

</div>
</div>

      </section>

      <Footer />

    </div>

  )
}