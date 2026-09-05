import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const revisiRows = ["revisi_1", "revisi_2", "revisi_3", "revisi_4"];

export default async function Materi4Peta6Step3RevisiHasilVerifikasi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const limasImage = await getPageImage("M4-P6-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <p className="m-0 text-sm text-[#4B5563]">
        Gunakan hasil verifikasi untuk memperbaiki jawabanmu{" "}
        <span className="font-bold text-[#2563EB]">berdasarkan bukti</span> yang telah diperoleh.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Revisi Jawaban</h2>
          </div>
          <p className="m-0 text-xs text-[#4B5563]">
            Apabila setelah berdiskusi terdapat cara atau bagian yang perlu diperbaiki, tuliskan
            hasil revisimu berikut alasan revisinya.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[420px]">
              <thead>
                <tr>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 rounded-l-lg">
                    Yang Direvisi (Bagian/Jawaban)
                  </th>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 border-l border-white rounded-r-lg">
                    Alasan Revisi (Bukti/Alasan Matematis)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {revisiRows.map((key) => (
                  <tr key={key}>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`answers.yang_direvisi_${key}`}
                        defaultValue={getValue(`yang_direvisi_${key}`)}
                        placeholder="Tuliskan (jika ada)..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`answers.alasan_revisi_${key}`}
                        defaultValue={getValue(`alasan_revisi_${key}`)}
                        placeholder="Tuliskan (jika ada)..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3 flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.4 8.6-8 9-4.6-.4-8-4-8-9V7l8-4z" />
            </svg>
            <p className="m-0 text-[11px] text-[#4B5563] leading-[1.5]">
              <span className="font-bold">Catatan:</span> Tuliskan bagian yang berubah setelah
              memperoleh bukti atau alasan matematis yang lebih tepat.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Hasil Verifikasi</h2>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="hasil_verifikasi" className="text-xs font-semibold text-[#374151]">
                Berdasarkan hasil verifikasi, hasil yang kami peroleh adalah ...
              </label>
              <textarea
                id="hasil_verifikasi"
                name="answers.hasil_verifikasi"
                defaultValue={getValue("hasil_verifikasi")}
                rows={5}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
            <EditablePageImage
              imageKey="M4-P6-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={limasImage}
              alt="Ilustrasi bangun limas"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative hidden sm:block w-24 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-[#ECFDF5]"
            />
          </div>

          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl p-3 flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-[11px] text-[#1D4ED8] leading-[1.5]">
              Ingat hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas.
            </p>
          </div>

          <div className="mt-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3.5 flex flex-col gap-2">
            <p className="m-0 text-xs font-bold text-[#111827]">Pertanyaan:</p>
            <p className="m-0 text-xs text-[#374151]">
              Mengapa pada limas luas alas dihitung satu kali, sedangkan luas seluruh sisi tegaknya
              perlu dijumlahkan?
            </p>
            <textarea
              name="answers.pertanyaan_luas_alas"
              defaultValue={getValue("pertanyaan_luas_alas")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
