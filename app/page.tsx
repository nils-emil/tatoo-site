'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import { Metadata } from "next";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'et', 'de'];
    let targetLang = 'en';
    if (supportedLangs.includes(browserLang)) {
      targetLang = browserLang;
    }
    router.replace(`/${targetLang}`);
  }, [router]);
  return null;
}