# Effort Calculator

import Tabs from '@theme/Tabs';
import {Alert} from 'antd'
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

![Effort Calculator](/img/features/effort.png ':size=100%')

### Cara pakai
<Tabs>
  <TabItem value="auto" label="Otomatis" default>
    <ul>
      <li>Bikin channel yang ada <code>keqing</code>, <code>effort</code> atau <code>management</code> di nama channel nya</li>
      <Admonition title="Contoh :" type="info">
        <ul>
        <li>#effort-calculator</li>
        <li>#keqing-bot</li>
        <li>#karuta-management</li>
        <li>..... etc</li>
        </ul>
      </Admonition>
      <li>Pastiin kalo <span className="mention">@Keqing</span> udah punya permission yang bener </li>
      <li>Sekarang kalian sudah bisa jalanin perintah <code>kwi [code]</code> di channel yang baru aja dibuat/disetup.</li>
    </ul>
  </TabItem>
  <TabItem value="reaction" label="Reaction Trigger">
    <ul>
      <li>Pastiin kalo <span className="mention">@Keqing</span> udah punya permission yang bener </li>
      <li>Jalanin perintah <code>kwi [code]</code> di channel mana aja.</li>
      <li>Terus react 🔢 dibagian embednya</li>
    </ul>
  </TabItem>
</Tabs>

### Catatan Penting
Kalo kondisi kartu kalian sudah `mint`, hasil perhitungan harusnya **lebih akurat**, Tapi kalau kondisi kartu kalian belum mint, hasil perhitungannya **ngga terlalu akurat**.

### Info perhitungan lainnya
- **Vanity** = Apa itu vanity? 
Semakin rendah nomor cetak kartu kalian terhadap jumlah yang dicetak, semakin tinggi vanity akan meningkat. Jadi, vanity akan bertambah dengan sendirinya `seiiring berjalannya waktu`.
- **Max Vanity** = Kondisi dimana kartu Anda Grade vanity nya S atau mencapai titik maksimal A vanity. Kartu "High print" kemungkinan besar tidak akan pernah mencapai kondisi ini
- **X Toughness** = Kalian bisa memperolehnya dari `dating sistem`.
- **Max Possible Effort** = (Effort saai ini (Mystic + Frame)) + (S Vanity / Maxed A Vanity) + (S Toughness) + Tambahan Wellness. Jika Kartu kalian "high printed", lebih baik **Tidak usah** melihat hasil dari `Max A. vanity + S. tough.`.
