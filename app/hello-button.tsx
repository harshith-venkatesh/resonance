'use client';

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function HelloButton() {
  return (
    <Button variant={'outline'} onClick={() => toast.success('Hello world')}>
      Click me!
    </Button>
  );
}
