import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Layout from "../../../src/components/Layout";
import styles from "./BlogPostTemplate.module.scss";

export default function BlogPostTemplate(props: any) {
  return (
    <Layout>
      <ol className={styles.main}>
        <li className={styles.entry}>
          <div className={styles.number}>{props.number}.</div>
          <p className={styles.date}>
            {new Date(props.date).toLocaleString("default", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className={styles.entryIntro}>
            <h1 className={styles.entryTitle}>{props.quote}</h1>
            <div className={styles.entryHeading}>
              <div className={styles.entryPic}>
                <img
                  src="images/submissions/01/taylor.png"
                  alt="Lifestyle shot of Taylor with her Husband in Eastern Pennsylvania, USA."
                  width="400"
                  height="323"
                  style={{ width: "400px", display: "block" }}
                />
              </div>
              <ul className={styles.entryList}>
                <li className={styles.entryItem}>
                  <span className={styles.entryKey}>Name:</span> Taylor
                </li>
                <li className={styles.entryItem}>
                  <span className={styles.entryKey}>Age:</span> 29
                </li>
                <li className={styles.entryItem}>
                  <span className={styles.entryKey}>Sex:</span> Female
                </li>
                <li className={styles.entryItem}>
                  <span className={styles.entryKey}>Race:</span> White
                </li>
                <li className={styles.entryItem}>
                  <span className={styles.entryKey}>Loc:</span> Eastern PA
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <ReactMarkdown>{props.content}</ReactMarkdown>
          </div>
        </li>
      </ol>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const fs = require("fs");
  // get specific markdown blog post
  const { number, slug } = ctx.params;
  const markdownFilePath = `./posts/${number}-${slug}.md`;

  const fileContents = fs.readFileSync(markdownFilePath, "utf8");

  const data = matter(fileContents);

  const {
    data: { title, date, quote },
    content,
  } = data;
  return {
    props: {
      title,
      date,
      quote,
      content,
      number,
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");
  const paths = fs
    .readdirSync(`./posts`)
    .map((path: string) => {
      const [number, ...slugArr] = path.replace(/\.mdx?$/, "").split("-");
      const slug = slugArr.join("-");
      return {
        slug,
        number,
      };
    })
    .map(({ number, slug }: { number: string; slug: string }) => ({
      params: { number, slug },
    }));

  return {
    paths,
    fallback: false,
  };
}
