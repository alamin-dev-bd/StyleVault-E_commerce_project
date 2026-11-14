from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    """
    Wrap every DRF error in the same JSON shape so React can handle errors in ONE place:

        {"success": false, "message": "...", "errors": {...} | null, "status_code": 400}
    """
    response = exception_handler(exc, context)  # DRF's default handler builds the response
    if response is None:
        return None  # a real server crash: let Django return its normal 500 response

    data = response.data
    if isinstance(data, dict) and set(data.keys()) == {"detail"}:
        # e.g. 401 / 403 / 404 -> {"detail": "Not found."}
        message, errors = str(data["detail"]), None
    else:
        # validation errors -> {"email": ["Enter a valid email."]}
        message = "Validation failed." if response.status_code == 400 else "Request failed."
        errors = data

    response.data = {
        "success": False,
        "message": message,
        "errors": errors,
        "status_code": response.status_code,
    }
    return response