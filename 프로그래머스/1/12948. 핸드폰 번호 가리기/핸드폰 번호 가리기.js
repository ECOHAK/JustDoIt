function solution(phone_number) {
        const phone_number_length = phone_number.length;
        const sliced_phone_number = phone_number.slice(phone_number_length-4, phone_number_length);

        let phone_arr = [];

        phone_arr = phone_number.split('');    

        let answer = '*'.repeat(phone_number.length -4)  +  sliced_phone_number;
        return answer;
    }

