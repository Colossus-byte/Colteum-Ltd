"use server";

export type FormState = {
  success: boolean;
  error: string | null;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const inquiry = formData.get("inquiry")?.toString() ?? "General";
  const venture = formData.get("venture")?.toString() ?? "";
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const subjectParts = [
    `New inquiry from ${name}`,
    `— ${inquiry}`,
    venture ? `(${venture})` : "",
  ].filter(Boolean);

  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/colteumcompany@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          "Inquiry Type": inquiry,
          ...(venture ? { Venture: venture } : {}),
          message,
          _subject: subjectParts.join(" "),
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    if (!res.ok) throw new Error("Upstream error");
    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error:
        "Something went wrong. Please try again or reach out via WhatsApp.",
    };
  }
}
