"use server"

import { expireTag } from "next/cache";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchBirthdays() {
    // "use cache";//remove this to show Suspense working
    // cacheLife("minutes");
    const res = await fetch(`${API_BASE_URL}/birthdays`);
    if (!res.ok) throw new Error('Failed to fetch birthdays');
    return res.json();
}

export async function fetchMe() {
    "use cache";
    cacheTag('my-data')
    const res = await fetch(`${API_BASE_URL}/me`);
    if (!res.ok) throw new Error('Failed to fetch user data');
    return res.json();
}

export async function fetchFullMe() {
    const res = await fetch(`${API_BASE_URL}/fullMe`);
    if (!res.ok) throw new Error('Failed to fetch user data');
    return res.json();
}

export async function updateMe(data: Partial<User>) {
    const res = await fetch(`${API_BASE_URL}/me`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update user data');
    expireTag('my-data')
    return res.json();
}

export async function getVersion() {
    const res = await fetch(`${API_BASE_URL}/version`);
    if (!res.ok) throw new Error('Failed to fetch version');
    return res.json();
}

export interface User {
    id: number;
    name: string;
    email: string;
    image: string;
}

