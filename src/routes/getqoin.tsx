import { createFileRoute } from "@tanstack/react-router";
import { GetQoin } from "@/components/get-qoin";

export const Route = createFileRoute("/getqoin")({
  head: () => ({
    meta: [
      { title: "Get Qoin | finux" },
      {
        name: "description",
        content:
          "Download Graysons Wallet 0.3.0, the proof-of-concept Android wallet, node, and miner for Qoin. No token. No sale. No promised value.",
      },
    ],
  }),
  component: GetQoin,
});
