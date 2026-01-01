import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CandleWebsite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero */}
      <section className="bg-[url('https://images.unsplash.com/photo-1603006905003-be475563bc59')] bg-cover bg-center py-24 px-6 text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Zs&CsCandle – Kézzel Készített Gyertyák</h1>
          <p className="text-lg mb-6">Letisztult formavilág, természetes alapanyagok és meghitt hangulat – szeretettel készítve, hogy otthonod igazán különleges legyen.</p>
          <Button className="rounded-2xl">Kapcsolatfelvétel</Button>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Rólunk</h2>
        <p className="text-lg">A Zs&CsCandle gyertyái kézzel készülnek, kis szériában, természetes viaszok és válogatott illóolajok felhasználásával. Letisztult megjelenésük és harmonikus illatuk meghitt hangulatot teremt bármely otthonban.</p>
      </section>

      {/* Products */}
      <section className="py-20 px-6 bg-neutral-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Gyertyáink</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Levendula", "Vanília", "Fahéj"].map((item) => (
            <Card key={item} className="rounded-2xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71" alt={item} className="rounded-t-2xl h-56 w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-2">{item} illatú gyertya</h3>
                <p>Kézzel öntött, természetes gyertya, kellemes és hosszan tartó illattal.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Kapcsolatfelvétel</h2>
        <form className="grid grid-cols-1 gap-4">
          <input placeholder="Név" className="p-3 rounded-xl border" />
          <input placeholder="Email cím" className="p-3 rounded-xl border" />
          <textarea placeholder="Üzenet" className="p-3 rounded-xl border h-32" />
          <Button className="rounded-2xl w-fit">Üzenet küldése</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-neutral-500">© 2026 Zs&CsCandle
