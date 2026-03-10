"use client";

import { useEffect, useState } from "react";

interface Submission {
  id: number;
  name: string;
  email: string;
  org: string | null;
  inquiry_type: string;
  message: string;
  created_at: string;
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/submissions?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setSubmissions(data.submissions);
          setTotal(data.total);
          setTotalPages(data.totalPages);
        }
      })
      .catch(() => setError("Failed to load submissions"))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <section className="pt-28 pb-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Form Submissions</h1>
          <p className="text-white/60">
            {total} total submission{total !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-8 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}. Make sure the Vercel Postgres database is connected.
            </div>
          )}

          {loading ? (
            <div className="text-center py-20 text-slate-400">Loading...</div>
          ) : submissions.length === 0 && !error ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No submissions yet.</p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Name</th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Email</th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Org</th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Type</th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((s) => (
                      <tr
                        key={s.id}
                        className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
                        onClick={() => setSelected(s)}
                      >
                        <td className="px-5 py-4 text-sm text-slate-500 whitespace-nowrap">
                          {new Date(s.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-5 py-4 text-sm font-medium text-navy">{s.name}</td>
                        <td className="px-5 py-4 text-sm text-slate-600">
                          <a href={`mailto:${s.email}`} className="hover:text-teal underline">
                            {s.email}
                          </a>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-500">{s.org || "—"}</td>
                        <td className="px-5 py-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal/10 text-teal text-xs font-medium capitalize">
                            {s.inquiry_type}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-500 max-w-xs truncate">
                          {s.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {submissions.map((s) => (
                  <div
                    key={s.id}
                    className="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-teal/30 transition-colors"
                    onClick={() => setSelected(s)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-navy">{s.name}</p>
                        <p className="text-sm text-slate-500">{s.email}</p>
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal/10 text-teal text-xs font-medium capitalize shrink-0">
                        {s.inquiry_type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-2">{s.message}</p>
                    <p className="text-xs text-slate-400 mt-2">
                      {new Date(s.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-navy disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-slate-500">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-navy disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-navy">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-sm text-teal hover:underline">
                    {selected.email}
                  </a>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-navy transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Organization</p>
                  <p className="text-sm text-navy">{selected.org || "—"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Inquiry Type</p>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal/10 text-teal text-xs font-medium capitalize">
                    {selected.inquiry_type}
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Date</p>
                  <p className="text-sm text-navy">
                    {new Date(selected.created_at).toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Message</p>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
