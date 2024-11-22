import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SeekingSponsorsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold">スポンサー募集開始</h2>
      <div>
        <p>
          一緒にTypescriptコミュニティを盛り上げていただけるスポンサー企業を募集いたします。
        </p>
      </div>
      <Button
        asChild
        variant="default"
        size="lg"
        className="rounded-full w-48 bg-blue-600 hover:bg-blue-700"
      >
        <Link href="#" target="_blank" rel="noopener noreferrer">
          抽選を申し込む
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
