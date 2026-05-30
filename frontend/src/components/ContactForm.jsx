import { useState } from 'react';
import { CheckCircle } from '../icons';
import { COMPANY } from '../constants/company';
import { SERVICE_FORM_OPTIONS } from '../constants/services';

export default function ContactForm({ defaultService = '', inquiryType = 'general', compact = false }) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', service: defaultService, message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, inquiryType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setStatus({ type: 'success', message: data.message });
      setForm({ name: '', email: '', company: '', phone: '', service: defaultService, message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className={`contact__form glass-panel ${compact ? 'contact__form--compact' : ''}`} onSubmit={handleSubmit}>
        <div className="contact__row">
          <label>
            Full Name *
            <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
          </label>
          <label>
            Email *
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder={`you@${COMPANY.domain}`} />
          </label>
        </div>
        <div className="contact__row">
          <label>
            Company
            <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd" />
          </label>
          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} placeholder={COMPANY.phoneDisplay} />
          </label>
        </div>
        <label>
          Service / Topic *
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select a topic</option>
            {SERVICE_FORM_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Message *
          <textarea name="message" value={form.message} onChange={handleChange} required rows={compact ? 4 : 5} placeholder="Tell us about your requirements..." />
        </label>
        <button type="submit" className="btn-primary contact__submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>

      {status && (
        <div className="toast-container">
          <div className={`toast ${status.type}`}>
            {status.type === 'success' && <CheckCircle />}
            <span>{status.message}</span>
          </div>
        </div>
      )}
    </>
  );
}
