// src/app/courses/courses.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  Image: string;   
  catId: number;   
  category: string;   
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent {
  selectedCategory: string = 'All';

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Basics',
      instructor: 'Ali Ahmed',
      price: 150,
      seats: 8,
      Image: 'https://picsum.photos/id/1015/300/200',
      catId: 1,
      category: 'Programming'
    },
    {
      id: 2,
      title: 'React for Beginners',
      instructor: 'Sara Ali',
      price: 200,
      seats: 5,
      Image: 'https://picsum.photos/id/201/300/200',
      catId: 1,
      category: 'Programming'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Mohamed Hassan',
      price: 120,
      seats: 3,
      Image: 'https://picsum.photos/id/30/300/200',
      catId: 2,
      category: 'Design'
    },
    {
      id: 4,
      title: 'Digital Marketing 2026',
      instructor: 'Fatma Khaled',
      price: 180,
      seats: 0,
      Image: 'https://picsum.photos/id/40/300/200',
      catId: 3,
      category: 'Marketing'
    },
    {
      id: 5,
      title: 'Business Strategy',
      instructor: 'Khaled Nour',
      price: 250,
      seats: 1,
      Image: 'https://picsum.photos/id/50/300/200',
      catId: 4,
      category: 'Business'
    },
    {
      id: 6,
      title: 'Advanced Angular',
      instructor: 'Hassan Mahmoud',
      price: 300,
      seats: 4,
      Image: 'https://picsum.photos/id/60/300/200',
      catId: 1,
      category: 'Programming'
    }
  ];

 
  get filteredCourses(): Course[] {
    if (this.selectedCategory === 'All') {
      return this.courses;
    }
    return this.courses.filter(course => course.category === this.selectedCategory);
  }


  register(course: Course): void {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}
