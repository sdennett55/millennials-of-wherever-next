import styles from "./PostLayout.module.scss";

export default function PostLayout() {
  return (
    <ol className={styles.main}>
      <li className={styles.entry}>
        <p className={styles.date}>January 30, 2022</p>
        <div className={styles.entryIntro}>
          <h2 className={styles.entryTitle}>
            I feel like despite the shitty hand I was dealt, I did everything
            right
          </h2>
          <div className={styles.entryHeading}>
            <div className={styles.entryPic}>
              <img
                src="images/submissions/01/taylor.png"
                alt="Lifestyle shot of Taylor with her Husband in Eastern Pennsylvania, USA."
                height="auto"
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
        <h3 className={styles.entrySubtitle}>My Story</h3>
        <p className={styles.entryCopy}>
          My birth parents were addicts/abusive and I was in and out of foster
          care. Cue miscellaneous trauma. Come high school it was time to decide
          to go to college or not and I was told by teachers and councilors to
          try community college as my grades weren’t the best. No one recognized
          that I needed to go to university because once I graduated high
          school, I was out of the foster care system and had nowhere to live. I
          went to state school for two years amassing $30,000 in debt, dropped
          out, and started working full time.
        </p>
        <p className={styles.entryCopy}>
          I’m “one of the lucky ones” because I worked my way up into management
          and was making six figures. My boyfriend (now husband) is a unioned
          electrician with no student loan debt. My boyfriend and I got a house
          (for 30k in forclosure in 2012, had it paid off by 2017), got married,
          I paid off my student loans in full, and had two babies. I couldn’t
          continue working 10+ hour days and be away from my kids that long.
          Also, even with my salary, daycare for two kids would mean I was
          bringing home only one-third of my check all to only get to spend
          MAYBE one hour a day with my kids. It wasn’t worth it so I left to
          stay home with them.
        </p>
        <p className={styles.entryCopy}>
          We’ve now outgrown our home and are ready to buy a new one, even with
          a preapproval letter, we’re losing all the houses we’re interested in
          to all cash offers. Our saving grace right now is that we’re mortgage
          free and will be able to sell the home for 5x what we paid for it.
          We’re considering moving into our Mother-in-law's basement (two
          toddlers, two adults, and a dog) so that we can sell our home and
          potentially compete with these cash offers.
        </p>
        <p className={styles.entryCopy}>
          I feel like despite the shitty hand I was dealt, I did everything
          right. I overcame my personal traumas and what was expected of foster
          kids. I got the good job, worked the long hours to earn a good salary.
          Bought a house, lived below our means to get it paid off. Paid off my
          loans like I was supposed to. And still, I’m now jobless with two
          small kids, and considering moving into my MIL's basement. I genuinely
          don’t understand how people are supposed to succeed.
        </p>
        <h3 className={styles.entrySubtitle}>Where were you on 9/11?</h3>
        <p className={styles.entryCopy}>
          I was in the 3rd grade coloring some American Flag worksheets.
        </p>
        <h3 className={styles.entrySubtitle}>
          How did the 2008 Recession affect you?
        </h3>
        <p className={styles.entryCopy}>
          I was in High School, my best friend's mom lost her job and they took
          me in through foster care to help me which also allowed me to keep the
          extra income.
        </p>
      </li>
    </ol>
  );
}
