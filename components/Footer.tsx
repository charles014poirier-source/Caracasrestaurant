import { Footer7 } from "@/components/ui/footer-7";
import { caracasConfig } from '@/data/clients/caracas';

export function Footer() {
  return <Footer7
    contactInfo={caracasConfig.contact}
    config={caracasConfig.config}
    hours={caracasConfig.hours}
  />;
}
