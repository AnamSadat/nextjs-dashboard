"use server";

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amout: formData.get("amount"),
    status: formData.get("status"),
  };

  // NOTE: Mutating Data: 4. Validasi dan siapkan data

  console.log(rawFormData);
}
