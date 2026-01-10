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
    const result = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/$(process.snv.HUBSPOT_PORTAL_ID)/$(process.snv.HUBSPOT_FROM_ID)",
        {
            method: "POST",
            headers: {
                "Contest-Type": "aplication/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "lastname",
                        value: rawFormDate.lastname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "firstname",
                        value: rawFormDate.firstname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormDate.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormDate.message,
                    }
                ]
            })
        }
    )

    try {
        await result.json();
    } catch (e) {
        console.error(e);
        return {
            status: "error",
            message: "お問い合わせ中に失敗しました"
        };
    }
    return { status: "success" , message: "OK"};
}