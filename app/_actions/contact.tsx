"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContact(_prevState: any, formData: FormData) {
    const rawFormDate = {
        lastname: formData.get("lastname") as string,
        firstname: formData.get("firstname") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormDate.lastname) {
        return {
            status: "error",
            message: "姓を入力してください。",
        };
    }
    
    if (!rawFormDate.firstname) {
        return {
            status: "error",
            message: "名を入力してください。",
        };
    }

    if (!rawFormDate.company) {
        return {
            status: "error",
            message: "会社名を入力してください。",
        };
    }

    if (!rawFormDate.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください。",
        };
    }

    if (!validateEmail(rawFormDate.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています。",
        };
    }

    if (!rawFormDate.message) {
        return {
            status: "error",
            message: "メッセージを入力してください。",
        };
    }

    return { status: "success" , message: "OK"};
}