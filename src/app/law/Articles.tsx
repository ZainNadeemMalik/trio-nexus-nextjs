import { motion } from "framer-motion"

export const Article = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos culpa consequuntur repellat distinctio eveniet eligendi? Quod vitae similique nesciunt assumenda id autem minus ea nihil est, unde quasi praesentium iusto. Praesentium deleniti sit impedit voluptates harum omnis optio nostrum eveniet sunt, fugit obcaecati? Aperiam tempore ipsum rerum quisquam distinctio?</p>
</motion.div>
  )
}