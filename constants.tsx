
import { SiteConfig, ServiceItem, PortfolioItem, Testimonial } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  companyName: "인정E&C",
  slogan: "공간의 가치를 더하는\n전문 위생 솔루션",
  heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  contactEmail: "ijeng725@gmail.com",
  phone: "010-3657-0526",
  address: "경기도 성남시 중원구 산성대로 106, 3층 A389호",
  accentColor: "#8B5CF6",
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "에어컨 정밀 세척",
    description: "완전 분해 세척을 통해 곰팡이와 세균을 완벽히 제거하고 냉방 효율을 극대화합니다.",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop",
    category: "aircon"
  },
  {
    id: "s2",
    title: "빌딩 외벽 청소",
    description: "고소 작업 전문가가 빌딩의 외관을 신축 건물처럼 깨끗하게 복원합니다.",
    imageUrl: "https://images.unsplash.com/photo-1545459720-aac273a27b46?q=80&w=1974&auto=format&fit=crop",
    category: "building"
  },
  {
    id: "s3",
    title: "사무실 정기 관리",
    description: "쾌적한 업무 환경을 위해 맞춤형 정기 클리닝 프로세스를 제공합니다.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    category: "office"
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "S타워 전층 에어컨 세척",
    client: "S그룹",
    date: "2024.03",
    description: "450대의 시스템 에어컨 완전 분해 세척 완료",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "p2",
    title: "인정 메디컬 센터 정기 방역",
    client: "인정병원",
    date: "2024.02",
    description: "병원급 고수준 멸균 및 정기 위생 관리 서비스",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "김현우",
    role: "오피스 관리팀장",
    content: "지금껏 맡겼던 업체 중 가장 꼼꼼합니다. 정기 관리 도입 후 직원들 만족도가 매우 높아요.",
    rating: 5
  },
  {
    id: "t2",
    name: "이지수",
    role: "건물주",
    content: "외벽 청소 결과가 놀랍습니다. 건물의 가치가 올라간 기분이에요. 추천합니다.",
    rating: 5
  }
];
