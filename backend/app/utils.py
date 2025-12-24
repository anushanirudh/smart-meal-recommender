def activity_to_int(activity):
    activity = activity.lower()
    if "loss" in activity:
        return 0
    if "maintain" in activity:
        return 1
    return 2
