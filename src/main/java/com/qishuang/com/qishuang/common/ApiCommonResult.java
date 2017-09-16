package com.qishuang.com.qishuang.common;

/**
 * Created by geek720 on 2017/9/10.
 */
public class ApiCommonResult {
    private static final long serialVersionUID = 3211632810484778741L;

    private Integer status;
    private String message;
    private Object data;
    private boolean success;



    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ApiCommonResult(Integer status,String message){
        this.status = status;
        this.message = message;
    }

    public ApiCommonResult(Integer status,String message,Object data){
        this.status = status;
        this.message = message;
        this.data = data;
    }


    public ApiCommonResult(boolean success,Integer status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = success;
    }
    public ApiCommonResult(boolean success,Integer status, String message) {
        this.status = status;
        this.message = message;
        this.success = success;
    }



    public Object getData(){
        return data;
    }

    public void setData(Object data){
        this.data = data;
    }
}
