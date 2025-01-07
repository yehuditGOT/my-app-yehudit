import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <>
            <br /><br /><br /><br /><br /><p>ברוכים הבאים לחנות האביזרים שלנו!
            כאן תמצאו מגוון רחב של פריטים שעונים על כל הצרכים שלכם, 
            מהטכנולוגיה המתקדמת ביותר ועד לעיצובים ייחודיים שישדרגו את המראה שלכם.</p>
            
            <br />
            <p>אנו מציעים אביזרים איכותיים לכל טעם,
            בין אם מדובר באביזרי סאונד, מטענים, כיסויים לניידים,
            תיקים ואפילו פריטי עיצוב לבית שיתנו לכם את המגע המיוחד שאתם מחפשים.</p>
            
            <br />
            <p>המוצרים שלנו נבחרים בקפידה על מנת להבטיח לכם את הטוב ביותר,
            עם שירות אישי ומהיר שיבטיח חוויית קנייה מושלמת.</p>
            
            <br />
            <p>החנות שלנו פתוחה 24/7, ותוכלו להזמין 
            את כל האביזרים שאתם צריכים ישירות דרך האתר. אל תהססו לפנות אלינו לכל שאלה או בקשה!</p>

            <br />
            <p>התחילו לקנות עכשיו וגלו את כל מה שיש לנו להציע! כל פריט באתר נבחר במיוחד בשבילכם, עם דגש על איכות ועיצוב מתקדם.</p>
            <Link to="/ContactForm">
        <button>צור קשר</button>
      </Link>
            {/* הוספת סרטון */}
            <div>
                <video width="30%" controls>
                    <source src="/videos/ישיבה.mp4" type="video/mp4" />
                    הסביבה שלך לא תומכת בסרטון.
                </video>
            </div>
        </>
    );
}
