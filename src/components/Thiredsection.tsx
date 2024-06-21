"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import '../public/css/thiredsection.css'

const content =
[
    {
        "title": "Lily's First Melody",
        "description": "Lily, a young girl with a passion for music, enrolls in the 'Introduction to Music Theory' class at Harmony Heights. Under the guidance of Mr. Thompson, she discovers the magical world of notes and rhythms, sparking a lifelong love for music."
    },
    {
        "title": "Ben's Piano Journey",
        "description": "Ben, a shy boy who always dreamed of playing the piano, joins the 'Beginner Piano Lessons' class. With patience and practice, he learns to play his first song, gaining confidence and joy with each key he touches."
    },
    {
        "title": "Sophia's Guitar Mastery",
        "description": "Sophia, an aspiring guitarist, enrolls in 'Advanced Guitar Techniques' to challenge herself. Through hard work and dedication, she masters complex pieces and earns a spot in the town's prestigious music competition."
    },
    {
        "title": "Emma Finds Her Voice",
        "description": "Emma, who always loved to sing but never had formal training, takes the plunge into 'Vocal Training for Beginners.' With the help of her supportive instructor, she finds her true voice and performs at her first recital."
    },
    {
        "title": "Jake's Jazz Adventure",
        "description": "Jake, a saxophonist with a love for jazz, joins the 'Jazz Improvisation' class. He learns to create soulful solos, eventually leading his band in an unforgettable performance at the annual jazz festival."
    },
    {
        "title": "Mia's Production Debut",
        "description": "Mia, fascinated by the behind-the-scenes magic of music, signs up for 'Music Production 101.' She learns the intricacies of recording and mixing, producing her first track that captivates her friends and family."
    },
    {
        "title": "Anna's Classical Journey",
        "description": "Anna, a history enthusiast and music lover, dives into the 'History of Classical Music' course. She gains a profound appreciation for classical composers and decides to pursue a career in music education."
    },
    {
        "title": "Liam's Electronic Dreams",
        "description": "Liam, a tech-savvy teen with a knack for beats, joins 'Electronic Music Composition.' He creates innovative electronic tracks that gain popularity online, opening doors to new opportunities."
    },
    {
        "title": "Percussion Passion",
        "description": "A group of friends, united by their love for rhythm, enrolls in 'Percussion Ensemble.' They bond over their shared passion, creating electrifying performances that resonate with their community."
    },
    {
        "title": "Olivia's Songwriting Success",
        "description": "Olivia, a poet at heart, joins the 'Songwriting Workshop.' With encouragement from her peers and mentor, she writes a beautiful song that wins the school's annual songwriting contest."
    }
];

export default function Thiredsection() {
  return (
    <div className="thiredsection"  >
        <h1 className="text-center text-3xl text-teal-700 fixed">Some inspireing Story</h1>
      <StickyScroll content={content} />
    </div>
  );
}
