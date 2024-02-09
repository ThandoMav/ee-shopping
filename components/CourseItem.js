/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import moment from 'moment';


export default function CourseItem({ course }) {
  return (
    <div className="card">
    {/*
      <Link href={`/course/${course.slug}`}>
        <a>
          <img
            src={course.image}
            alt={course.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      */}
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/course/${course.slug}`}>
          <a>
            <h2 className="text-lg">{course.name}</h2>
          </a>
        </Link>

        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">

        </p>
        <button
          className="primary-button"
          type="button"
        >
          <Link href={`/course/${course.slug}`}> View</Link>
        </button>
      </div>
    </div>
  );
}
